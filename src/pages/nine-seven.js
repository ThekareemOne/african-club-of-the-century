import React from "react";

export default function NineSeven() {
  return (
    <div className="section-ns" id="section-ns">
      <div className="ns__heading">
        <h2 className="ns__text">
          <span className="zamalek">9</span> > <span className="ahly">7</span>
        </h2>
      </div>
      <div className="container">
        <div className="column column-one">
          <div className="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--1">&nbsp;</div>
              <div className="card__heading">
                Zamalek has won 4 Champions league trophies
              </div>
            </div>
            <div class="card__side card__side--back">
              <div class="card__picture card__picture--2">&nbsp;</div>
              <div className="card__heading">Ahly has only won two</div>
            </div>
          </div>
        </div>
        <div className="column column-two">
          <div className="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--3">&nbsp;</div>
              <div className="card__heading">
                Zamalek has won 2 african super cups
              </div>
            </div>
            <div class="card__side card__side--back">
              <div class="card__picture card__picture--4">&nbsp;</div>
              <div className="card__heading">Ahly has none</div>
            </div>
          </div>
        </div>
        <div className="column column-three">
          <div className="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--5">&nbsp;</div>
              <div className="card__heading">
                Zamalek has won a total of 9 trophies
              </div>
            </div>
            <div class="card__side card__side--back">
              <div class="card__picture card__picture--6">&nbsp;</div>
              <div className="card__heading">Ahly has won a total of 7</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
