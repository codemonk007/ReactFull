import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import * as css from './main_style.module.css';
render(
     <div className={css.name}>Hello</div>,
  document.getElementById("app")
);
