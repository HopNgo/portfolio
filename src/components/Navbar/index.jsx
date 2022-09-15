import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// #102A42

const NavbarWrapper = styled.div`
  display: flex;
  height: 77px;
  justify-content: center;
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
`;

const NavbarName = styled.span`
  font-size: 25px;
  font-weight: bold;
  font-weight: bold;
  letter-spacing: 1px;
  flex: 400px 0 0;
`;

const NavbarLinkWrapper = styled.div`
  display: flex;
  gap: 30px;
  position: relative;
`;
const NavbarLinkUnderline = styled.div`
  position: absolute;
  border-bottom: 5px solid #ffffff;
  width: ${(props) => props.position.width};
  border-radius: 10px;
  bottom: 0;
  left: ${(props) => props.position.offsetWidth};
  transition: all 0.2s linear;
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
`;

const Navbar = () => {
  const [positionUnderline, setPositionUnderline] = useState({
    width: "0px",
    offsetWidth: "0px",
  });

  const navbarRef = useRef();

  const [fixedNavbar, setFixedNavbar] = useState(false);

  const handleScroll = () => {
    setFixedNavbar(window.pageYOffset > navbarRef.current.offsetHeight);
  };

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
  console.log(fixedNavbar);
  return (
    <NavbarWrapper ref={navbarRef} fixedNavbar={fixedNavbar}>
      <NavbarName>{"<HopNgo />"}</NavbarName>
      <NavbarLinkWrapper>
        <NavbarLinkUnderline position={positionUnderline} />
        <NavbarLink
          onMouseOver={handleHoverLink}
          onMouseLeave={handleLeaveLink}
          href="#home"
        >
          Home
        </NavbarLink>
        <NavbarLink
          onMouseOver={handleHoverLink}
          onMouseLeave={handleLeaveLink}
          href="#about"
        >
          About
        </NavbarLink>
        <NavbarLink
          onMouseOver={handleHoverLink}
          onMouseLeave={handleLeaveLink}
          href="#skill"
        >
          Skills
        </NavbarLink>
        <NavbarLink
          onMouseOver={handleHoverLink}
          onMouseLeave={handleLeaveLink}
          href="#portfolio"
        >
          Portfolio
        </NavbarLink>
        <NavbarLink
          onMouseOver={handleHoverLink}
          onMouseLeave={handleLeaveLink}
          href="#contact"
        >
          Contact
        </NavbarLink>
      </NavbarLinkWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
