import React from "react";
import { appendScript } from "../appendScript";

export default class Knockout extends React.Component {
  componentDidMount() {
    appendScript("./scroll-down.js");
  }

  render() {
    return (
      <div className="section-knockout" id="section-knockout">
        <div className="knockout__heading">
          <h2 className="knockout__text">Knockout &gt; Points</h2>
        </div>
        <div className="knockout__body" id="knockout__body">
          <p className="knockout__main">
            <span className="knockout__main--top">| Combat Sports |</span>
            <span className="knockout__main--bottom">
              point system is only used if fighters fail to knockout each other
            </span>
          </p>
        </div>
      </div>
    );
  }
}
