const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const { CHAT_SERVICE_URL } = require("../config/allEnv");

const router = express.Router();
const chatServiceUrl = CHAT_SERVICE_URL;

router.use(
  "/",
  createProxyMiddleware({
    target: chatServiceUrl,
    changeOrigin: true,
    logger: console,
  })
);

module.exports = router;
