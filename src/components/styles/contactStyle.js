import styled from "styled-components";

export const StyledContact = styled.div`
  min-height: 50vh;
  background-color: rgb(111, 177, 189);
`;

export const Wrapper = styled.div`
  display: flex;
  height: 300px;
  justify-content: space-between !important;
  align-items: center;
  /* background-color: red; */

  img {
    height: 120px;
    width: 120px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .form-control {
    padding: 20px;
    border: none;
    border-bottom: 2px solid white;
    background: transparent;
    color: white;
    ::-webkit-input-placeholder {
      color: white !important;
    }
  }
  .form-control:focus {
    box-shadow: none;
  }

  .form-label {
    color: white;
  }

  h1 {
    color: white;
    font-size: 25px;
  }

  Button {
    background-color: white;
    color: rgb(111, 177, 189);
  }
`;
