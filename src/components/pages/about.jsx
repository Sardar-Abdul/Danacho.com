import React from "react";
import {
  StyledAbout,
  HeadingContainer,
  TextContainer,
} from "../styles/aboutStyle";
import { Container } from "react-bootstrap";

function About() {
  const data = [
    {
      heading: `How to Use Danacho`,
      text: `To use Danacho, the first thing you are going to need is a wallet. Visit our FAQ page and get the right wallet for you. These wallets are available for a variety of platforms and contain everything you need to use Danacho immediately.`,
    },
    {
      heading: `Get Some Coins`,
      text: `After you install a wallet, you need to get some Danacho. There are multiple ways to acquire some tokens to spend, but the easiest way is to use an exchange and convert your fiat money into ETH. Many exchanges, centralized and decentralized, list Danacho (NAC).`,
    },
    {
      heading: `It's a Currency: Use It!`,
      text: `It's a Currency: Use It! Danacho is a currency and can be exchanged for goods, services and other currencies, privately and with very low fees. Many entities will gladly accept NAC for payments; take a look at our 'Merchants' page.`,
    },
    {
      heading: `Find Answers to Your Questions`,
      text: `We've heard a lot of questions and have compiled a thorough and varied FAQ. Don't worry, if your questions are not in there, you can always ask to reach out via Contact Us and we'll be happy to help!.`,
    },
  ];
  return (
    <StyledAbout id="about">
      {data.map((item, index) => {
        return (
          <Container key={index}>
            <HeadingContainer>
              <h4>{item.heading}</h4>
            </HeadingContainer>
            <TextContainer>
              <p>{item.text}</p>
            </TextContainer>
          </Container>
        );
      })}
    </StyledAbout>
  );
}

export default About;
