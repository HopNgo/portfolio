import styled from "styled-components";

const ContentBase = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 50px;
  margin-top: 50px;
  padding: 0 50px;
  @media (min-width: 0px) and (max-width: 767px) {
    flex-direction: column;
    padding: 0;
    gap: 50px;
  }
`;

export default ContentBase;
