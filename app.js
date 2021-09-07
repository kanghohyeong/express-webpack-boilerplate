const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

// var indexRouter = require("./routes/index");

const app = express();
const config = require("./webpack.dev.js");
const compiler = webpack(config);

if (process.env.NODE_ENV === "development") {
  app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }));
}
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "build")));

// app.use('/', indexRouter);

module.exports = app;
