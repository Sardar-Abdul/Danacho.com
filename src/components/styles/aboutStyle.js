import styled from "styled-components";

export const StyledAbout = styled.div`
  min-height: 80vh;
  background-color: rgb(111, 177, 189);
  @media (max-width: 768px) {
    min-height: 230vh;
  }
`;

export const HeadingContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  h4 {
  }
`;

export const TextContainer = styled.div`
  display: flex;
  /* background-color: red; */
  justify-content: center;
  align-items: center;

  p {
    width: 70%;
    padding: 20px;
    font-size: 20px;
    font-weight: 300;
  }
`;
