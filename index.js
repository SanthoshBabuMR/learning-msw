"use strict";
exports.__esModule = true;
// src/index.js
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var App_1 = require("./App");
if (process.env.NODE_ENV === "development") {
    var worker = require("./mocks/browser").worker;
    worker.start();
}
react_dom_1["default"].render(<App_1.App />, document.getElementById("root"));
