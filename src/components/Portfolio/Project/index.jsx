import React from "react";
import styled from "styled-components";
import ButtonBase from "../../../styled-components/ButtonBase";

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  border-radius: 7px;
  border-bottom: 1px dashed white;
  padding: 80px 0;
`;
const PropjectCover = styled.div`
  width: 585px;
  height: 333px;
  border-radius: 10px;
  a {
    img {
      border-radius: 10px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 1s;
      cursor: pointer;
      opacity: 0.6;
      &:hover {
        opacity: 1;
      }
    }
  }
`;

const ProjectInfo = styled.div`
  flex-basis: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  h2 {
    letter-spacing: 1.5px;
    line-height: 20px;
  }
  p {
    font-size: 17px;
  }
  ul {
    margin-left: 35px;
    list-style-type: square;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px 60px;
  }
  a {
    display: block;
    width: 100%;
    z-index: 10;
  }
`;

const ProjectBtn = styled(ButtonBase)`
  width: 100%;
`;

const Project = ({ project }) => {
  return (
    <ProjectWrapper>
      <PropjectCover className="animate" data-animate="slideInLeft 1.5s">
        <a href={project.liveLink} target="_blank" rel="noreferrer">
          <img src={project.cover} alt="Not Found" />
        </a>
      </PropjectCover>
      <ProjectInfo className="animate" data-animate="slideInRight 1.5s">
        <h2>{project.title.toUpperCase()}</h2>
        <p>{project.description}</p>
        <ul>
          {project.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <a href={project.liveLink} target="_blank" rel="noreferrer">
          <ProjectBtn>Live</ProjectBtn>
        </a>
        <a href={project.ghLink} target="_blank" rel="noreferrer">
          <ProjectBtn>Source</ProjectBtn>
        </a>
      </ProjectInfo>
    </ProjectWrapper>
  );
};

export default Project;
