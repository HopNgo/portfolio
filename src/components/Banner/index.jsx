import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import avatar from "../../assets/images/avatar.jpg";
import ButtonBase from "../../styled-components/ButtonBase";

const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: calc(50% - 500px);
  height: 90vh;
  background-color: var(--color-bg-1);
  align-items: center;
  @media (min-width: 768px) and (max-width: 1024px) {
    gap: 20px;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    flex-direction: column;
    gap: 50px;
    height: 120vh;
  }
  @media (max-width: 479px) {
    flex-direction: column;
    gap: 50px;
    height: 100vh;
  }
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  flex-basis: 400px;
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-basis: 350px;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    flex-basis: 0;
    align-items: center;
  }
  @media (max-width: 479px) {
    flex-basis: 0;
    align-items: center;
  }
  span {
    font-size: 70px;
    line-height: 78px;
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 50px;
      line-height: 55px;
    }
    @media (min-width: 480px) and (max-width: 767px) {
      font-size: 45px;
      line-height: 50px;
    }
    @media (max-width: 480px) {
      font-size: 30px;
      line-height: 35px;
    }
  }
  p {
    letter-spacing: 3px;
    color: #aaaaaa;
    margin-top: 20px;
    @media (min-width: 480px) and (max-width: 1024px) {
      font-size: 13px;
    }
    @media (max-width: 479px) {
      font-size: 12px;
    }
  }
`;

const BannerButtons = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;

const BannerBtn = styled(ButtonBase)`
  font-size: 16px;
  padding: 10px 20px;
  @media (min-width: 480px) and (max-width: 1024px) {
    font-size: 13px;
  }
  @media (max-width: 479px) {
    font-size: 12px;
  }
`;

const BannerIcons = styled.div`
  display: flex;
  margin-top: 50px;
  gap: 0 50px;
  padding-left: 20px;
  a {
    color: #ffffff;
    .icon {
      font-size: 32px;
      @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 25px;
      }
      @media (min-width: 480px) and (max-width: 767px) {
        font-size: 28px;
      }
      @media (max-width: 479px) {
        font-size: 25px;
      }
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
        opacity: 0.8;
      }
    }
  }
  @media (min-width: 0px) and (max-width: 767px) {
    margin-top: 20px;
  }
`;

const BannerAvatar = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
  z-index: 1;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 280px;
    height: 280px;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    width: 280px;
    height: 280px;
  }
  @media (max-width: 479px) {
    width: 220px;
    height: 220px;
  }
  &::after {
    content: "";
    border: 5px solid #ffffff;
    border-radius: 10px;
    width: 400px;
    height: 400px;
    position: absolute;
    transform: translate(-92%, 20px);
    z-index: -1;
    box-shadow: 0 2px 50px 50px rgba(255, 255, 255, 0.2);

    @media (min-width: 768px) and (max-width: 1024px) {
      width: 280px;
      height: 280px;
      box-shadow: 0 2px 30px 30px rgba(255, 255, 255, 0.2);
    }
    @media (min-width: 480px) and (max-width: 767px) {
      width: 280px;
      height: 280px;
      box-shadow: 0 2px 30px 30px rgba(255, 255, 255, 0.2);
    }
    @media (max-width: 479px) {
      width: 220px;
      height: 220px;
      box-shadow: 0 2px 30px 30px rgba(255, 255, 255, 0.2);
    }
  }
`;

const BannerImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <BannerContent>
        <span className="animate" data-animate="slideInTop 2s">
          I'm A Web Developer
        </span>
        <p className="animate" data-animate="slideInLeft 2s">
          I Love Building MERN Application
        </p>
        <BannerButtons className="animate" data-animate="slideInLeft 2s">
          <a href="#about">
            <BannerBtn>ABOUT ME</BannerBtn>
          </a>
          <a href="#portfolio">
            <BannerBtn>PORTFOLIO</BannerBtn>
          </a>
        </BannerButtons>
        <BannerIcons className="animate" data-animate="slideInBottom 2s">
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
        </BannerIcons>
      </BannerContent>
      <BannerAvatar className="animate" data-animate="slideInRight 2s">
        <BannerImg src={avatar} alt="Not Found" />
      </BannerAvatar>
    </BannerWrapper>
  );
};

export default Banner;
