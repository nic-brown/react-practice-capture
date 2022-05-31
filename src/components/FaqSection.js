import React from "react";
import styled from "styled-components";
import { About } from "../styles";
const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any questions <span>FAQ</span>
      </h2>
      <div className="question">
        <div className="faq-line"></div>
        <h4>How do I start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            aliquid.
          </p>
        </div>
      </div>
      <div className="question">
        <div className="faq-line"></div>
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            aliquid.
          </p>
        </div>
      </div>
      <div className="question">
        <div className="faq-line"></div>
        <h4>Diferrent payment methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            aliquid.
          </p>
        </div>
      </div>
      <div className="question">
        <div className="faq-line"></div>
        <h4>What products do you offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            aliquid.
          </p>
        </div>
      </div>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
    position: relative;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
