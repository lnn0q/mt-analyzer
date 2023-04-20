import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <header>
      <label>mt-analyzer</label>
      <nav>
        <button className="open-manual">&#xf128;</button>
        <div className="hum-base">
          <input type="checkbox" className="hum-check" />
          <span className="hum-stick stick1"></span>
          <span className="hum-stick stick2"></span>
          <span className="hum-stick stick3"></span>
          <div className="hum-hidden">hello, user!</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
