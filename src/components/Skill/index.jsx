import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import jqueryIcon from "../../assets/images/jquery.png";
import tailwindIcon from "../../assets/images/tailwind.png";
import sqlIcon from "../../assets/images/sql.png";
import graphqlIcon from "../../assets/images/graphql.png";
import apiIcon from "../../assets/images/api.png";
import UnderlineBase from "../../styled-components/UnderlineBase";
import HeaderBase from "../../styled-components/HeaderBase";

const SkillWrapper = styled.div`
  padding: 80px 20px;
  background-color: var(--color-bg-1);
`;

const SkillHeader = styled(HeaderBase)``;

const SkillHeaderLine = styled(UnderlineBase)``;

const SkillList = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  @media (min-width: 1440px) {
    max-width: 1900px;
    margin: 50px auto 0px;
  }
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 200px;
  align-items: center;
  gap: 10px 0;
  text-align: center;
  @media (min-width: 480px) and (max-width: 768px) {
    flex-basis: 150px;
  }
  @media (max-width: 479px) {
    flex-basis: 100px;
  }
`;

const Skill = () => {
  return (
    <SkillWrapper id="skill">
      <SkillHeader>
        <h1 className="animate" data-animate="tracking-in-expand 1s">
          Skills
        </h1>
        <SkillHeaderLine
          className="animate"
          data-animate="slideInTop 1.5s"
        ></SkillHeaderLine>
      </SkillHeader>
      <SkillList className="animate" data-animate="slideInLeft 1.5s">
        <SkillItem>
          <FontAwesomeIcon
            icon={brands("html5")}
            style={{ fontSize: "32px" }}
          />
          <span>HTML</span>
        </SkillItem>
        <SkillItem>
          <FontAwesomeIcon icon={brands("css3")} style={{ fontSize: "32px" }} />
          <span>CSS</span>
        </SkillItem>
        <SkillItem>
          <FontAwesomeIcon icon={brands("sass")} style={{ fontSize: "32px" }} />
          <span>SASS/SCSS</span>
        </SkillItem>
        <SkillItem>
          <FontAwesomeIcon
            icon={brands("bootstrap")}
            style={{ fontSize: "32px" }}
          />
          <span>Bootstrap</span>
        </SkillItem>
        <SkillItem>
          <img src={tailwindIcon} alt="" />
          <span>Tailwind</span>
        </SkillItem>
        <SkillItem>
          <FontAwesomeIcon
            icon={solid("palette")}
            style={{ fontSize: "32px" }}
          />
          <span>Styled Components</span>
        </SkillItem>
        <SkillItem>
          <FontAwesomeIcon icon={brands("js")} style={{ fontSize: "32px" }} />
          <span>Javascript</span>
        </SkillItem>
        <SkillItem>
          <img src={jqueryIcon} alt="" />
          <span>JQuery</span>
        </SkillItem>
        <SkillItem>
          <FontAwesomeIcon
            icon={brands("react")}
            style={{ fontSize: "32px" }}
          />
          <span>React/Redux</span>
        </SkillItem>

        <SkillItem>
          <FontAwesomeIcon
            icon={brands("node-js")}
            style={{ fontSize: "32px" }}
          />
          <span>Nodejs/Express</span>
        </SkillItem>

        <SkillItem>
          <FontAwesomeIcon
            icon={solid("database")}
            style={{ fontSize: "32px" }}
          />
          <span>MongoDB</span>
        </SkillItem>
        <SkillItem>
          <img src={sqlIcon} alt="" />
          <span>SQL</span>
        </SkillItem>
        <SkillItem>
          <img src={graphqlIcon} alt="" />
          <span>GraphQL</span>
        </SkillItem>
        <SkillItem>
          <img src={apiIcon} alt="" />
          <span>ResfulAPI</span>
        </SkillItem>
        <SkillItem>
          <FontAwesomeIcon
            icon={brands("square-git")}
            style={{ fontSize: "32px" }}
          />
          <span>Git</span>
        </SkillItem>
      </SkillList>
    </SkillWrapper>
  );
};

export default Skill;
