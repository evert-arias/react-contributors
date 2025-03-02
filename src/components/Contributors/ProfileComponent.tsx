import React from "react";
import type { ProfileComponentProps } from "./types";

class ProfileComponent extends React.Component<ProfileComponentProps> {
  render() {
    return (
      <a
        className="react-contributors-profile"
        href={this.props.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="react-contributors-profile-inner">
          <img
            className="react-contributors-avatar"
            src={this.props.avatar_url || "/placeholder.svg"}
            alt={`${this.props.name}'s avatar`}
          />
          <div className="react-contributors-info">
            <h4 className="react-contributors-name">{this.props.name}</h4>
            <small className="react-contributors-contributions">
              Contributions: {this.props.contributions}
            </small>
          </div>
        </div>
      </a>
    );
  }
}

export default ProfileComponent;
