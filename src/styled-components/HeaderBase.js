import styled from "styled-components";

const HeaderBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  h1 {
    letter-spacing: 2px;
    font-size: 40px;
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 30px;
    }
    @media (min-width: 480px) and (max-width: 767px) {
      font-size: 28px;
    }
    @media (max-width: 480px) {
      font-size: 25px;
    }
  }
`;

export default HeaderBase;
