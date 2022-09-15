import React from "react";
import styled from "styled-components";
import ContentBase from "../../styled-components/ContentBase";
import HeaderBase from "../../styled-components/HeaderBase";
import UnderlineBase from "../../styled-components/UnderlineBase";

const AboutWrapper = styled.div`
  padding: 80px 0;
  background-color: var(--color-bg-2);
`;

const AboutHeader = styled(HeaderBase)``;

const AboutHeaderLine = styled(UnderlineBase)``;

const AboutContent = styled(ContentBase)``;

const AboutInfo = styled.div`
  flex: 600px 0;
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  h3 {
    font-size: 27px;
  }
  p {
    line-height: 30px;
    color: #aaaaaa;
  }
`;

const AboutEducation = styled.div`
  flex: 600px 0;
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  h3 {
    font-size: 27px;
  }
  p,
  span {
    line-height: 30px;
    letter-spacing: 2px;
  }
  span {
    color: #aaaaaa;
  }
  p {
    font-weight: bold;
  }
`;

const About = () => {
  return (
    <AboutWrapper id="about">
      <AboutHeader>
        <h1 className="animate" data-animate="tracking-in-expand 1s">
          About Me
        </h1>
        <AboutHeaderLine
          className="animate"
          data-animate="slideInTop 1.5s"
        ></AboutHeaderLine>
      </AboutHeader>
      <AboutContent>
        <AboutInfo className="animate" data-animate="slideInLeft 1.5s">
          <h3>Get To Know Me!</h3>
          <p>
            My name is Hop Ngo. I started learning how to code in August 2019
            when I was studying in my university and I spent most of my free day
            with Front-end ( HTML, CSS and JavaScript, React ) and Back-end
            (Nodejs).
          </p>
          <p>
            I enjoy coding and the challenge of learning something new everyday.
            My goal is to pursue a career in the field of Front-end (ReactJs) or
            Back-end (Nodejs) development.
          </p>
        </AboutInfo>
        <AboutEducation className="animate" data-animate="slideInRight 1.5s">
          <h3>Education</h3>
          <span>2019-2022</span>
          <p>
            Bachelor Of Information Technology - HCMC University of Information
            Technology University (UIT)
          </p>
        </AboutEducation>
      </AboutContent>
    </AboutWrapper>
  );
};

export default About;
