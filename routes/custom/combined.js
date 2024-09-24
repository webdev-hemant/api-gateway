const express = require("express");
const axios = require("axios");

const router = express.Router();

const authServiceUrl = "http://localhost:4000"; // Auth service URL
const chatServiceUrl = "http://localhost:5000"; // Chat service URL
const publicPostServiceUrl = "http://localhost:6000"; // Public post service URL

router.get("/", async (req, res) => {
  try {
    // Make parallel requests to the microservices
    const [authResponse, chatResponse, publicPostResponse] = await Promise.all([
      axios.get(`${authServiceUrl}/some-auth-endpoint`), // Replace with actual endpoint
      axios.get(`${chatServiceUrl}/some-chat-endpoint`), // Replace with actual endpoint
      axios.get(`${publicPostServiceUrl}/some-post-endpoint`), // Replace with actual endpoint
    ]);

    // Combine responses
    const combinedResponse = {
      authData: authResponse.data,
      chatData: chatResponse.data,
      publicPosts: publicPostResponse.data,
    };

    // Send combined response
    res.json(combinedResponse);
  } catch (error) {
    console.error("Error fetching data from microservices:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
