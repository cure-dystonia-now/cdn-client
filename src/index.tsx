"use strict";

import React from "react";
import ReactDOM from "react-dom";

import "bulma/css/bulma.min.css";
import "flexboxgrid/dist/flexboxgrid.css"

import "./style/index.less";

import {Application} from "./components/Application";

ReactDOM.render(<Application/>, document.getElementById("application"));