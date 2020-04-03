import React from "react";
import { Octokit } from "@octokit/rest";
import _ from "lodash";
import {
  ContributorsList,
  Profile,
  Photo,
  Intro,
  Name,
  Subtitle
} from "./styles";

const octokit = new Octokit();

class ProfileComponent extends React.Component {
  render() {
    return (
      <Profile href={this.props.url}>
        <Photo src={this.props.avatar_url} />
        <Intro>
          <Name>{this.props.name}</Name>
          <Subtitle>Contributions: {this.props.contributions}</Subtitle>
        </Intro>
      </Profile>
    );
  }
}

export default class Contributors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contributors: []
    };
  }

  loadContributors(owner, repo) {
    return new Promise((resolve, reject) => {
      octokit.repos
        .listContributors({
          owner: owner,
          repo: repo
        })
        .then(
          result => {
            this.setState({
              contributors: [
                ..._.orderBy(
                  _.unionBy(this.state.contributors, result.data, "login"),
                  "contributions",
                  "desc"
                )
              ]
            });
            resolve();
          },
          reason => {
            reject(reason);
          }
        );
    });
  }

  componentDidMount() {
    // No repo props provided
    if (!this.props.repo) {
      this.setState({
        contributors: []
      });
      return;
    }

    // If repo props provided but contains a single repo name
    if (this.props.repo && !Array.isArray(this.props.repo)) {
      this.loadContributors(this.props.owner, this.props.repo);
      return;
    }

    // repo props provided as array
    this.props.repo.map(repo => {
      this.loadContributors(this.props.owner, repo);
    });
  }

  render() {
    return (
      <ContributorsList>
        {this.state.contributors && this.state.contributors.length
          ? this.state.contributors.map((contributor, key) => {
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
          : undefined}
      </ContributorsList>
    );
  }
}
