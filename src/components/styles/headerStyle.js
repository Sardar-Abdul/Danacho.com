import styled from "styled-components";
import banner from "../../assets/images/banner.png";

export const StyledHeader = styled.div`
  background-image: url(${banner});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const PresaleEndContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 3em;
  padding-bottom: 7em;
  width: 100%;
  height: 100%;
`;
export const TextContainer = styled.div`
  text-align: center;

  h2 {
    font-size: 60px;
    padding-bottom: 0.3em;

    @media (max-width: 575.98px) {
      font-size: 40px;
    }
  }
  h3 {
    font-size: 30px;
    padding-bottom: 0.3em;
    @media (max-width: 575.98px) {
      font-size: 25px;
    }
  }
`;
export const TimerComponents = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;

  section {
    p {
      font-size: 25px;
      font-weight: 500;
      padding-left: 2em;
      text-align: center;
      @media (max-width: 575.98px) {
        font-size: 20px;
      }
    }
  }
`;

//PresaleStartsHere

export const PresaleStartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const PresaleStartTextContainer = styled.div`
  text-align: center;

  h3 {
    font-size: 30px;
    padding-bottom: 0.3em;
    @media (max-width: 575.98px) {
      font-size: 25px;
    }
  }
`;
export const PresaleStartTimerComponents = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;

  section {
    p {
      font-size: 25px;
      font-weight: 500;
      padding-left: 2em;
      text-align: center;
      @media (max-width: 575.98px) {
        font-size: 20px;
      }
    }
  }
`;
