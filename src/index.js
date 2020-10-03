import React from "react";
import ReactDOM from "react-dom";
import App from "./app/app";
import * as serviceWorker from "./serviceWorker";

/* --------------------------------- styles --------------------------------- */
import "./assets/lib/animate/animate.css";
import "./assets/lib/lightbox/css/lightbox.css";
import "./assets/lib/owlcarousel/assets/owl.theme.default.css";
import "./assets/lib/owlcarousel/assets/owl.carousel.css";
import "./assets/lib/slick/slick-theme.css";
import "./assets/lib/slick/slick.css";
import "./assets/lib/flaticon/font/flaticon.css";
import "./assets/styles/css/style.css";
/* -------------------------------------------------------------------------- */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
