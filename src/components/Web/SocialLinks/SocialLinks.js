import React from "react";
import { ReactComponent as YoutubeIcon } from "../../../assets/img/svg/youtube.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/img/svg/twitter.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/img/svg/linkedin.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/img/svg/facebook.svg";

import "./SocialLinks.scss";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="htt:/www.youtube.com"
        className="youtube"
        target="_blank"
        rel="noopener noreferrer"
      >
        <YoutubeIcon />
      </a>

      <a
        href="htt:/www.twitter.com"
        className="twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon />
      </a>
      <a
        href="htt:/www.facebook.com"
        className="facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon />
      </a>
      <a
        href="htt:/www.linkedin.com"
        className="linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinIcon />
      </a>
    </div>
  );
}
