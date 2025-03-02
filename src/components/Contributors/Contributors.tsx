import React from "react";
import { Octokit } from "@octokit/rest";
import type {
  Contributor,
  ContributorsProps,
  ContributorsState,
} from "./types";
import { unionByLogin, orderByContributions } from "./utils";
import ProfileComponent from "./ProfileComponent";

const octokit = new Octokit();

class Contributors extends React.Component<
  ContributorsProps,
  ContributorsState
> {
  constructor(props: ContributorsProps) {
    super(props);
    this.state = {
      contributors: [],
    };
  }

  loadContributors(owner: string, repo: string): Promise<void> {
    return new Promise((resolve, reject) => {
      octokit.repos
        .listContributors({
          owner: owner,
          repo: repo,
        })
        .then(
          (result) => {
            const unionedContributors = unionByLogin(
              this.state.contributors,
              result.data as Contributor[]
            );
            const orderedContributors =
              orderByContributions(unionedContributors);

            this.setState({
              contributors: orderedContributors,
            });

            resolve();
          },
          (reason) => {
            reject(reason);
          }
        );
    });
  }

  componentDidMount() {
    if (!this.props.repo) {
      this.setState({
        contributors: [],
      });
      return;
    }

    if (this.props.repo && !Array.isArray(this.props.repo)) {
      this.loadContributors(this.props.owner, this.props.repo).then(() => {});
      return;
    }

    if (Array.isArray(this.props.repo)) {
      Promise.all(
        this.props.repo.map((repo) =>
          this.loadContributors(this.props.owner, repo)
        )
      ).then(() => {});
    }
  }

  render() {
    return (
      <div className="react-contributors-container">
        <div className="react-contributors-list">
          {this.state.contributors && this.state.contributors.length ? (
            this.state.contributors.map((contributor, key) => {
              return (
                <ProfileComponent
                  key={key}
                  avatar_url={contributor.avatar_url}
                  name={contributor.login}
                  url={contributor.html_url}
                  contributions={contributor.contributions}
                />
              );
            })
          ) : (
            <p className="react-contributors-message">No contributors found.</p>
          )}
        </div>
      </div>
    );
  }
}

export default Contributors;
