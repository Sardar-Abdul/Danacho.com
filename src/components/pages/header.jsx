import React, { useEffect, useState, useRef } from "react";
import {
  StyledHeader,
  PresaleEndContainer,
  TextContainer,
  TimerComponents,
  PresaleStartContainer,
  PresaleStartTimerComponents,
  PresaleStartTextContainer,
} from "../styles/headerStyle";

function Header() {
  const [timerDays, setTimerDays] = useState("0");
  const [timerHours, setTimerHours] = useState("0");
  const [timerMinutes, setTimerMinutes] = useState("0");
  const [timerSeconds, setTimerSeconds] = useState("0");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("May 14, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = countDownDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <StyledHeader id="header">
      <PresaleEndContainer>
        <TextContainer>
          <h2>Welcome To Danacho</h2>
          <h3>Presale End Time</h3>
        </TextContainer>
        <TimerComponents>
          <section>
            <p>{timerDays}</p>
            <p>
              <small>Days</small>
            </p>
          </section>
          <section>
            <p>{timerHours}</p>
            <p>
              <small>Hours</small>
            </p>
          </section>
          <section>
            <p>{timerMinutes}</p>
            <p>
              <small>Minutes</small>
            </p>
          </section>

          <section>
            <p>{timerSeconds}</p>
            <p>
              <small>Seconds</small>
            </p>
          </section>
        </TimerComponents>
      </PresaleEndContainer>

      {/* PresaleStartsHere */}
      <PresaleStartContainer>
        <PresaleStartTextContainer>
          <h3>Presale Start Time</h3>
        </PresaleStartTextContainer>
        <PresaleStartTimerComponents>
          <section>
            <p>0</p>
            <p>
              <small>Days</small>
            </p>
          </section>
          <section>
            <p>0</p>
            <p>
              <small>Hours</small>
            </p>
          </section>
          <section>
            <p>0</p>
            <p>
              <small>Minutes</small>
            </p>
          </section>

          <section>
            <p>0</p>
            <p>
              <small>Seconds</small>
            </p>
          </section>
        </PresaleStartTimerComponents>
      </PresaleStartContainer>
    </StyledHeader>
  );
}

export default Header;
