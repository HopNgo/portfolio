import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// #102A42

const NavbarWrapper = styled.div`
  display: flex;
  height: 77px;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  position: ${(props) => (props.fixedNavbar ? "fixed" : "none")};
  z-index: 999999;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: ${(props) =>
    props.fixedNavbar ? "0 2px 2px rgba(0,0,0, 0.5)" : "none"};
  animation: ${(props) =>
    props.fixedNavbar ? "fade-in-down 0.7s linear" : "none"};
  background-color: ${(props) =>
    props.fixedNavbar ? "var(--color-bg-2)" : "var(--color-bg-1)"};
  @media (min-width: 0px) and (max-width: 767px) {
    position: none;
  }
`;

const NavbarName = styled.span`
  font-size: 25px;
  font-weight: bold;
  font-weight: bold;
  letter-spacing: 1px;
  flex: 400px 0 0;
  @media (min-width: 768px) and (max-width: 1024px) {
    flex: 150px 0 0;
    font-size: 21px;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    flex: 300px 0 0;
    font-size: 21px;
  }
  @media (max-width: 479px) {
    flex: 150px 0 0;
    font-size: 18px;
  }
`;

const NavbarLinkWrapper = styled.div`
  display: flex;
  gap: 30px;
  position: relative;
  @media (min-width: 0px) and (max-width: 767px) {
    z-index: 20;
    position: fixed;
    background-color: #f9f9f9;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    padding-top: 100px;
    display: ${(props) => (props.showSideBar ? "flex" : "none")};
  }
`;

const IconTimes = styled.span`
  display: none;
  @media (min-width: 0px) and (max-width: 767px) {
    display: block;
    color: #617d98;
    position: absolute;
    font-size: 50px;
    z-index: 21;
    top: 20px;
    right: 50px;
  }
`;

const NavbarLinkUnderline = styled.div`
  position: absolute;
  border-bottom: 5px solid #ffffff;
  width: ${(props) => props.position.width};
  border-radius: 10px;
  bottom: 0;
  left: ${(props) => props.position.offsetWidth};
  transition: all 0.2s linear;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavbarLink = styled.a`
  text-decoration: none;
  color: #ffffff;
  letter-spacing: 3px;
  font-size: 19px;
  transition: transform 0.25s linear;
  &:hover {
    color: #0066ff;
    transform: translateY(-10px);
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 15px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    color: #617d98;
    font-size: 30px;
  }
  @media (max-width: 479px) {
    font-size: 25px;
  }
`;

const SideBar = styled.div`
  display: none;
  padding: 7px 14px;
  border: 1px solid white;
  border-radius: 7px;
  @media (min-width: 0px) and (max-width: 767px) {
    display: block;
  }
`;

const Navbar = () => {
  const [positionUnderline, setPositionUnderline] = useState({
    width: "0px",
    offsetWidth: "0px",
  });

  const navbarRef = useRef();

  const [fixedNavbar, setFixedNavbar] = useState(false);

  const handleScroll = () => {
    setFixedNavbar(
      window.pageYOffset > navbarRef.current.offsetHeight &&
        window.innerWidth > 480
    );
  };

  const [showSideBar, setShowSideBar] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [fixedNavbar]);

  const handleHoverLink = (e) => {
    setPositionUnderline({
      width: e.target.offsetWidth + "px",
      offsetWidth: e.target.offsetLeft + "px",
    });
  };
  const handleLeaveLink = (e) => {
    setPositionUnderline({
      width: 0,
      offsetWidth: e.target.offsetLeft + "px",
    });
  };

  return (
    <NavbarWrapper ref={navbarRef} fixedNavbar={fixedNavbar}>
      <NavbarName>{"<HopNgo />"}</NavbarName>
      <SideBar>
        <FontAwesomeIcon
          icon={solid("bars")}
          fontSize="20px"
          onClick={() => setShowSideBar(true)}
        />
      </SideBar>
      <NavbarLinkWrapper
        showSideBar={showSideBar}
        className="animate"
        data-animate="scale-up-tr 1s"
      >
        <NavbarLinkUnderline position={positionUnderline} />
        <IconTimes onClick={() => setShowSideBar(false)}>&times;</IconTimes>
        <NavbarLink
          onMouseOver={handleHoverLink}
          onMouseLeave={handleLeaveLink}
          href="#home"
          onClick={() => setShowSideBar(false)}
        >
          Home
        </NavbarLink>
        <NavbarLink
          onMouseOver={handleHoverLink}
          onMouseLeave={handleLeaveLink}
          href="#about"
          onClick={() => setShowSideBar(false)}
        >
          About
        </NavbarLink>
        <NavbarLink
          onMouseOver={handleHoverLink}
          onMouseLeave={handleLeaveLink}
          href="#skill"
          onClick={() => setShowSideBar(false)}
        >
          Skills
        </NavbarLink>
        <NavbarLink
          onMouseOver={handleHoverLink}
          onMouseLeave={handleLeaveLink}
          href="#portfolio"
          onClick={() => setShowSideBar(false)}
        >
          Portfolio
        </NavbarLink>
        <NavbarLink
          onMouseOver={handleHoverLink}
          onMouseLeave={handleLeaveLink}
          href="#contact"
          onClick={() => setShowSideBar(false)}
        >
          Contact
        </NavbarLink>
      </NavbarLinkWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
