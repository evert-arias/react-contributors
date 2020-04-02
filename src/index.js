import React from "react";
import { Octokit } from "@octokit/rest";
// import styles from "./styles.module.css";
import { Contributors, Profile, Photo, Intro, Name, Subtitle } from "./styles";

const octokit = new Octokit();

class ProfileComponent extends React.Component {
  render() {
    return (
      <Profile>
        <Photo src={this.props.avatar_url} />
        <Intro>
          <Name>{this.props.name}</Name>
          <Subtitle>
            <a href={this.props.url}>{this.props.url}</a>
          </Subtitle>
        </Intro>
      </Profile>
    );
  }
}

export default class ContributorsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contributors: []
    };
  }

  componentDidMount() {
    octokit.repos
      .listContributors({
        owner: this.props.owner,
        repo: this.props.repo
      })
      .then(
        result => {
          this.setState({
            contributors: [...result.data]
          });
        },
        () => {
          this.setState({
            contributors: []
          });
        }
      );
  }

  render() {
    return (
      <Contributors>
        {this.state.contributors && this.state.contributors.length
          ? this.state.contributors.map((contributor, key) => {
              return (
                <ProfileComponent
                  key={key}
                  avatar_url={contributor.avatar_url}
                  name={contributor.login}
                  url={contributor.html_url}
                />
              );
            })
          : undefined}
      </Contributors>
    );
  }
}
