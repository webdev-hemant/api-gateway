const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const { PUBLIC_SERVICE_URL } = require("../config/allEnv");

const router = express.Router();
const publicPostServiceUrl = PUBLIC_SERVICE_URL;

router.use(
  "/",
  createProxyMiddleware({
    target: publicPostServiceUrl,
    changeOrigin: true,
    logger: console,
  })
);

module.exports = router;
