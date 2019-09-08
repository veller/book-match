import React from "react";
import { Container, Social } from "./Footer.styles";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";

function Footer() {
  return (
    <Container>
      <Social>
        <a href="#">
          <img src={facebook} alt="facebook-social-icon" />
        </a>
        <a href="#">
          <img src={twitter} alt="twitter-social-icon" />
        </a>
        <a href="#">
          <img src={instagram} alt="instagram-social-icon" />
        </a>
      </Social>
      <span>© BookMatch 2019 All Rights Reserved</span>
    </Container>
  );
}

export default Footer;
