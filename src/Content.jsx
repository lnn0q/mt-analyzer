import "./Content.css";
import React from "react";

const Content = () => {
  return (
    <main>
      <form className="txt-form">
        <div className="textarea-container">
          <textarea className="input" placeholder="Enter your text." />
          <textarea className="input" placeholder="Enter your text." />
        </div>
        <button className="send-button">Check</button>
      </form>
    </main>
  );
};

export default Content;
