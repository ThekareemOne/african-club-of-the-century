import React from "react";
import LionSvg from "../components/LionSvg";
import PigSvg from "../components/PigSvg";

export default class Corruption extends React.Component {
  render() {
    return (
      <div className="section-corruption" id="section-corruption">
        <div className="corruption">
          <div className="corruption__heading">
            <h2 className="corruption__text">Why Does it matter</h2>
          </div>
          <div className="corruption__container">
            <div style={{ float: "left" }}>
              <PigSvg />
            </div>
            <div style={{ float: "left" }}>
              <LionSvg />
            </div>
            <div className="corruption__quote">
              “Who controls the past controls the future. Who controls the
              present controls the past.” ― George Orwell
            </div>
          </div>
        </div>
      </div>
    );
  }
}
