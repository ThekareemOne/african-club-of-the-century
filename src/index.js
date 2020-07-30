import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./fonts/african-culture-font/AfricanCulture-J17a.ttf";
import "./fonts/afrika-safari-rebuild-st-font/AfrikaSafariRebuildSt-2lzw.ttf";
import "./fonts/afrika-t-ubuntu-font/AfrikaTUbuntu-nAOV.ttf";
import "./fonts/afrika-wildlife-b-mammals2-font/AfrikaWildlifeBMammals2-9MJj.ttf";
import "./fonts/egyptian-nights-font/EgyptianNights-yAOV.ttf";
import "./fonts/tajamuka-script-font/TajamukaScript-ByW5.ttf";
import "./fonts/tribeca-font/TribecaRegular-d9P6.ttf";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
