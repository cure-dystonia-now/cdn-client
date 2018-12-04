"use strict";

import React from "react";
import ReactDOM from "react-dom";

import "spectre.css/dist/spectre.min.css";
import "spectre.css/dist/spectre-icons.min.css";
import "react-quill/dist/quill.snow.css";

import "./style/index.less";

import { Application } from "./components/Application";

ReactDOM.render(<Application/>, document.getElementById("application"));