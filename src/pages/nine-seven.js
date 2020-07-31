import React from "react";

export default function NineSeven() {
  return (
    <div className="section-ns" id="section-ns">
      <div className="ns__heading">
        <h2 className="ns__text">9 > 7</h2>
      </div>
      <div className="container">
        <div className="column column-one">
          <div className="card">
            <div class="card__side card__side--front">COLUMN ONE ZAMALEK</div>
            <div class="card__side card__side--back card__side--back-1">
              COLUMN ONE AHLY
            </div>
          </div>
        </div>
        <div className="column column-two">
          <div className="card">
            <div class="card__side card__side--front">COLUMN TWO ZAMALEK</div>
            <div class="card__side card__side--back card__side--back-2">
              COLUMN TWO AHLY
            </div>
          </div>
        </div>
        <div className="column column-three">
          <div className="card">
            <div class="card__side card__side--front">COLUMN THREE ZAMALEK</div>
            <div class="card__side card__side--back card__side--back-3">
              COLUMN THREE AHLY
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
