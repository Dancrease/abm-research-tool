require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();

// Enable CORS for frontend-backend communication
app.use(cors({
  origin: "http://localhost:3000", // Allow requests from your frontend
  credentials: true,
}));

// Parse JSON request bodies
app.use(express.json());

// Debugging: Log environment variables
console.log('Hunter API Key:', process.env.HUNTER_API_KEY);
console.log('Google API Key:', process.env.GOOGLE_API_KEY);
console.log('Google Search Engine ID:', process.env.GOOGLE_SEARCH_ENGINE_ID);
console.log('JWT Secret:', process.env.JWT_SECRET);

// Mock user database (replace with a real database later)
const users = [
  {
    id: 1,
    email: "user@example.com",
    password: "$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi", // Hashed password for "password"
  },
];

// Login endpoint
app.post("/api/login", async (req, res) => {
  console.log("Login request received:", req.body); // Log the request body

  const { email, password } = req.body;

  // Find the user by email
  const user = users.find((u) => u.email === email);
  if (!user) {
    console.log("User not found:", email); // Log if user is not found
    return res.status(401).json({ message: "Invalid email or password." });
  }

  // Compare the provided password with the hashed password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    console.log("Invalid password for user:", email); // Log if password is invalid
    return res.status(401).json({ message: "Invalid email or password." });
  }

  // Generate a JWT
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h", // Token expires in 1 hour
  });

  console.log("Login successful. Token generated:", token); // Log the generated token

  // Return the token
  res.json({ token });
});

// Research endpoint
app.get('/api/research', async (req, res) => {
  const { name, companyUrl, jobTitle } = req.query;

  try {
    console.log('Received request:', { name, companyUrl, jobTitle });

    const hunterApiKey = process.env.HUNTER_API_KEY;
    const googleApiKey = process.env.GOOGLE_API_KEY;
    const googleSearchEngineId = process.env.GOOGLE_SEARCH_ENGINE_ID;

    if (!hunterApiKey || !googleApiKey || !googleSearchEngineId) {
      throw new Error('API keys or Search Engine ID are missing. Please check your .env file.');
    }

    const cleanCompanyUrl = companyUrl.replace(/^https?:\/\//, '').replace(/\/$/, '').toLowerCase();
    console.log('Cleaned company URL:', cleanCompanyUrl);

    // Fetch company details from Hunter API
    console.log('Fetching company details from Hunter API...');
    const hunterResponse = await axios.get(
      `https://api.hunter.io/v2/domain-search?domain=${cleanCompanyUrl}&api_key=${hunterApiKey}`
    );

    if (!hunterResponse.data || hunterResponse.data.errors) {
      throw new Error(hunterResponse.data.errors || 'No data received from Hunter API.');
    }

    console.log('Hunter API Response:', hunterResponse.data);

    // Fetch search results from Google Search API
    console.log('Fetching search results from Google Search API...');
    const googleResponse = await axios.get(
      `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
        `${name} ${jobTitle} ${cleanCompanyUrl}`
      )}&key=${googleApiKey}&cx=${googleSearchEngineId}`
    );

    if (!googleResponse.data) {
      throw new Error('No data received from Google Search API.');
    }

    console.log('Google API Response:', googleResponse.data);

    // Format results
    const articles = googleResponse.data.items?.slice(0, 5).map((item) => ({
      title: item.title,
      link: item.link,
    })) || [];

    // Return structured results
    res.json({
      name,
      companyUrl,
      jobTitle,
      insights: [
        `${name} is a ${jobTitle} at ${companyUrl}.`,
        `${companyUrl} is in the ${hunterResponse.data.data?.industry || 'unknown'} industry.`,
        `${companyUrl} has ${hunterResponse.data.data?.employees || 'unknown'} employees.`,
        `${companyUrl} is known for its ${hunterResponse.data.data?.tags?.join(', ') || 'innovative solutions'}.`,
      ],
      articles,
    });
  } catch (error) {
    console.error('Error in /api/research:', error.response?.data || error.message);
    res.status(500).json({ error: error.message || 'Failed to fetch data' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});