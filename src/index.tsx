"use strict";

import React from "react";
import ReactDOM from "react-dom";

import "spectre.css/dist/spectre.min.css";
import "./style/index.less";

import {Application} from "./components/Application";

ReactDOM.render(<Application/>, document.getElementById("application"));