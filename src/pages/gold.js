import React from "react";
import { appendScript } from "../appendScript";

export default class Gold extends React.Component {
  componentDidMount() {
    appendScript("./scroll-down2.js");
  }
  render() {
    return (
      <div className="section-gold" id="section-gold">
        <div className="gold">
          <div className="gold__heading">
            <h2 className="gold__text">Gold > Silver</h2>
          </div>
          <div className="gold__body" id="gold__body">
            <p className="gold__main">
              <span className="gold__main--top">| Olympics |</span>
              <span className="gold__main--bottom">
                Gold is worth a hundred silver
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
