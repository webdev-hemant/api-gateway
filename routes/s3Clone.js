const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const { S3_CLONE_SERVICE_URL } = require("../config/allEnv");
const { extractOriginAndRoute } = require("../utils");

const router = express.Router();
const { origin } = extractOriginAndRoute(S3_CLONE_SERVICE_URL);

router.use(
  "/",
  createProxyMiddleware({
    target: origin,
    changeOrigin: true,
    logger: console,
    ws: true,
  })
);

module.exports = router;
