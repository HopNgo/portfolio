import styled from "styled-components";

const ButtonBase = styled.button`
  font-size: 17.5px;
  padding: 10px 0;
  letter-spacing: 1px;
  background-color: transparent;
  border-radius: 7px;
  border: 1px solid white;
  color: white;
  transition: all 0.5s;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: var(--color-bg-2);
  }
`;

export default ButtonBase;
