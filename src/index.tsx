"use strict";

import * as React from "react";
import * as ReactDOM from "react-dom";

import "./less/index.less";

import { Hello } from "./components/Hello";

ReactDOM.render(
  <Hello/>,
  document.getElementById("application")
);