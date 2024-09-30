const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const { PUBLIC_SERVICE_URL } = require("../config/allEnv");
const { extractOriginAndRoute } = require("../utils");

const router = express.Router();
const { origin } = extractOriginAndRoute(PUBLIC_SERVICE_URL);

router.use(
  "/",
  createProxyMiddleware({
    target: origin,
    changeOrigin: true,
    logger: console,
  })
);

module.exports = router;
