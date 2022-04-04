import styled from "styled-components";

export const StyledBuy = styled.div`
  min-height: 80vh;
  background-color: rgb(111, 177, 189);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;

  align-items: center;

  h1 {
    font-weight: 300;
    font-size: xx-large;
    text-align: center;
    padding-bottom: 40px;
  }
  .form-control {
    padding: 20px;
    width: 130%;
    border: none;
    border-bottom: 2px solid black;
    background: transparent;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .form-control:focus {
    box-shadow: none;
  }

  Button {
    background-color: rgb(239, 194, 16);
    border-radius: 20px;
    margin-top: 30px;
    border: none !important;
    width: 110%;
    padding: 15px;
    font-weight: 500;
    font-size: 20px;
    margin-left: 20px;

    @media (max-width: 768px) {
      width: 80%;
    }
  }
`;

export const Header = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  height: 100px;
`;
