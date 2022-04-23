import React, { useState } from "react";
import "./Accordion.css";
import { Data } from "../../AccordionQuestions";

import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (idx) => {
    if (clicked === idx) {
      // If clicked question is already active, then close it
      return setClicked(null);
    }
    setClicked(idx);
  };

  return (
    <IconContext.Provider value="">
      <div className="container">
        {Data.map((item, idx) => {
          return (
            <div className="accordion__content" key={idx}>
              <div className="question__holder" onClick={() => toggle(idx)}>
                <h3 className="question">{item.question}</h3>
                <span className="icon">
                  {clicked === idx ? <FiMinus /> : <FiPlus />}
                </span>
              </div>
              {clicked === idx ? (
                <div className="showHide">
                  <p className="answer">{item.answer}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </IconContext.Provider>
  );
};

export default Accordion;
