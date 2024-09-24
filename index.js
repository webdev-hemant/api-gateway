const express = require("express");
const authRoutes = require("./routes/auth");
const chatRoutes = require("./routes/chat");
const publicPostRoutes = require("./routes/publicPost");
const { GATEWAY_SERVER_PORT } = require("./config/allEnv");
const combinedRoutes = require("./routes/custom/combined");

const app = express();
const PORT = GATEWAY_SERVER_PORT;

app.use(express.json());

// Register routes
app.use("/auth", authRoutes);
app.use("/chat", chatRoutes);
app.use("/publicPost", publicPostRoutes);
app.use("/combined", combinedRoutes);

app.listen(PORT, () => {
  console.log(`API Gateway is running on http://localhost:${PORT}`);
});
