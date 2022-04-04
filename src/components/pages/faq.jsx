import React, { useState } from "react";
import { StyledFaq } from "../styles/faqStyle";
import { Faq } from "../styles/faqStyle";
import { Container } from "../styles/faqStyle";
import { Wrap } from "../styles/faqStyle";
import { Dropdown } from "../styles/faqStyle";
import { FaPlus, FaMinus } from "react-icons/fa";

function FAQ() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  const Data = [
    {
      id: 1,
      question: `1. I can't see my funds. Did I lose just lose all my Danacho?`,
      answer: `You probably didn't. It's very hard to simply 'lose' your tokens, since they are technically nowhere. Your coins 'live' on the blockchain and are linked to your account through a system of public and private keys secured by cryptography. That's why if you don't see your funds, it's probably because of a technical issue. Take a look at the 'Resources & Help' section at the top of this page for a list of useful resources that will help you identify and fix your problem.`,
    },
    {
      id: 2,
      question: `2. What is Danacho`,
      answer: `Danacho is an ERC-20 token built on the Ethereum blockchain. As a collectible meme token and cryptocurrency, Danacho strives to be a low cost bridge for international transactions.`,
    },
    {
      id: 3,
      question: `3. Why is Danacho called 'Danacho'?`,
      answer: `The origin of the name is derived from a nickname.`,
    },
    {
      id: 4,
      question: `4. How can I get Danacho?`,
      answer: `Above, if you connect a wallet, you can purchase Danacho directly from this website. Some wallets include functionality to easily buy Danacho with fiat or other cryptocurrencies. Also, you can buy Danacho from an exchange or from an individual. Exchanges are the most common way to buy Danacho (Etherfork, Forkdelta, Bitcratic, etc.) You can also directly trade Danacho for national currencies (USD, EUR, GBP, etc) or other cryptocurrencies on many exchanges.`,
    },
    {
      id: 5,
      question: `5. How does Danacho have value?`,
      answer: `Danacho has value because people are willing to buy it. If no one is willing to buy Danacho, then it will not have any value. Danacho’s price increases if demand exceeds supply, and it decreases if supply exceeds demand.`,
    },
  ];

  return (
    <StyledFaq id="faq">
      <Faq>
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>
        </div>
        <Container>
          {Data.map((item, index) => {
            return (
              <div key={item.id}>
                <Wrap onClick={() => toggle(index)}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FaMinus /> : <FaPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </div>
            );
          })}
        </Container>
      </Faq>
    </StyledFaq>
  );
}

export default FAQ;
