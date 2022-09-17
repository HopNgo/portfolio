import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  padding: 50px 0;
  background-color: var(--color-bg-2);
  color: white;
  text-align: center;
`;

const FooterIcons = styled.div`
  margin-bottom: 40px;
  display: flex;
  gap: 40px;
  justify-content: center;
  .icon {
    color: white;
    font-size: 28px;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
      transform: scale(1.1);
    }
  }
`;

const FooterCopyright = styled.p`
  letter-spacing: 1px;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    font-size: 13px;
  }
  strong {
    margin-left: 5px;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterIcons>
        <a
          href="https://www.facebook.com/hop.harry.25.4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={brands("facebook")} className="icon" />
        </a>
        <a
          href="https://github.com/HopNgo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={brands("github")} className="icon" />
        </a>
        <a href="#home">
          <FontAwesomeIcon icon={solid("home-user")} className="icon" />
        </a>
      </FooterIcons>
      <FooterCopyright>
        <FontAwesomeIcon icon={solid("copyright")} /> 2022
        <strong>HOP NGO</strong> | All Rights Reserved
      </FooterCopyright>
    </FooterWrapper>
  );
};

export default Footer;
