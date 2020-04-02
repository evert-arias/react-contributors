import React from "react";
import { Octokit } from "@octokit/rest";
import styles from "./styles.module.css";

const octokit = new Octokit();

class Profile extends React.Component {
  render() {
    return (
      <div className={styles.profile}>
        <img
          className={`${styles.photo} ${styles["photo-lg"]}`}
          src={this.props.avatar_url}
        />
        <div className={styles.intro}>
          <h4 className={styles.name}>{this.props.name}</h4>
          <small className={styles.subtitle}>
            <a href={this.props.url}>{this.props.url}</a>
          </small>
        </div>
      </div>
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
      <div className={styles.contributors}>
        {this.state.contributors && this.state.contributors.length
          ? this.state.contributors.map((contributor, key) => {
              return (
                <Profile
                  key={key}
                  avatar_url={contributor.avatar_url}
                  name={contributor.login}
                  url={contributor.html_url}
                />
              );
            })
          : undefined}
      </div>
    );
  }
}
