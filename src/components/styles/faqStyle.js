import styled from "styled-components";

export const StyledFaq = styled.div`
  min-height: 95vh;
  background-color: rgb(251, 237, 177);
`;

export const Faq = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .faq-header {
    margin-top: 70px;
    font-size: 12px;
    font-weight: lighter;
  }
`;
export const Container = styled.div`
  margin-top: 40px;
`;
export const Wrap = styled.div`
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  h1 {
    padding: 25px;
    font-size: 2 rem;
    font-size: 20px;
  }
`;

export const Dropdown = styled.div`
  p {
    margin-left: 42px;
    width: 35rem;
    font-weight: 600;
    font-size: 14.5px;
    letter-spacing: 0.5px;
    line-height: 1.5;
  }
`;
