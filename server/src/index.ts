// server/src/index.ts
import express from 'express';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000; // Use port 5000, or whatever is in .env

// Basic route for testing
app.get('/', (req, res) => {
  res.send('FeedRw Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Access it here: http://localhost:${PORT}`);
});