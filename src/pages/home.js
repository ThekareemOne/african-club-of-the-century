import React from "react";
import AfricaSvg from "../components/AfricaSvg";

export default function Home() {
  return (
    <div className="section-header">
      <div className="header">
        <div className="header__text">
          <h1 className="header__heading">
            <span className="header__span--main">
              3 Reasons why Zamalek is the{" "}
            </span>
            <span className="header__span--sub">
              African club of the century
            </span>
          </h1>
        </div>
        <div className="header__logo">
          <div className="header__svg">
            <AfricaSvg />
          </div>
        </div>
        <div className="header__down">
          <a class="ct-btn-scroll ct-js-btn-scroll" href="#section-ns">
            <img
              className="arrow-down"
              alt="Arrow Down Icon"
              src="./arrow-down-1.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
