import React from "react";
import styled from "styled-components";
import { projects } from "../../assets/data";
import ButtonBase from "../../styled-components/ButtonBase";
import HeaderBase from "../../styled-components/HeaderBase";
import UnderlineBase from "../../styled-components/UnderlineBase";
import Project from "./Project";

const PortfolioWrapper = styled.div`
  padding: 80px 20px;
  background-color: var(--color-bg-2);
`;

const PortfolioHeader = styled(HeaderBase)``;

const PortfolioHeaderLine = styled(UnderlineBase)``;

const PortfolioBtn = styled(ButtonBase)`
  padding: 10px 20px;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 13px;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 14px;
  }
  @media (max-width: 479px) {
    font-size: 13px;
  }
`;

const PortfolioFooter = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const Portfolio = () => {
  return (
    <PortfolioWrapper id="portfolio">
      <PortfolioHeader>
        <h1 className="animate" data-animate="tracking-in-expand 1s">
          Portfolio
        </h1>
        <PortfolioHeaderLine></PortfolioHeaderLine>
      </PortfolioHeader>
      <div>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
      <PortfolioFooter>
        <a
          href="https://github.com/HopNgo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PortfolioBtn>More Projects</PortfolioBtn>
        </a>
      </PortfolioFooter>
    </PortfolioWrapper>
  );
};

export default Portfolio;
