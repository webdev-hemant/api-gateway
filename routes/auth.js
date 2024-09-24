const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const { AUTH_SERVICE_URL } = require("../config/allEnv");

const router = express.Router();
const authServiceUrl = AUTH_SERVICE_URL;

router.use(
  "/",
  createProxyMiddleware({
    target: authServiceUrl,
    changeOrigin: true,
    logger: console,
  })
);

module.exports = router;
