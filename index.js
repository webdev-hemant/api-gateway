const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const chatRoutes = require("./routes/chat");
const publicPostRoutes = require("./routes/publicPost");
const { GATEWAY_SERVER_PORT } = require("./config/allEnv");
const combinedRoutes = require("./routes/custom/combined");
const { extractOriginAndRoute } = require("./utils");
const {
  AUTH_SERVICE_URL,
  CHAT_SERVICE_URL,
  PUBLIC_SERVICE_URL,
} = require("./config/allEnv");

const app = express();
const PORT = GATEWAY_SERVER_PORT;

app.use(cors({ origin: "*" }));

const { route: authRouteName } = extractOriginAndRoute(AUTH_SERVICE_URL);
const { route: chatRouteName } = extractOriginAndRoute(CHAT_SERVICE_URL);
const { route: publicPostRouteName } =
  extractOriginAndRoute(PUBLIC_SERVICE_URL);

// Register routes
app.use(authRouteName, authRoutes);
app.use(chatRouteName, chatRoutes);
app.use(publicPostRouteName, publicPostRoutes);
app.use(`/combined`, combinedRoutes);

app.use(express.json());

app.listen(PORT, () => {
  console.log(`API Gateway is running on http://localhost:${PORT}`);
});
