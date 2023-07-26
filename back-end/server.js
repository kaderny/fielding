const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
mongoose.set("strictQuery", false);

// Set up the express app
const app = express();
const port = 3001;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set the Access-Control-Allow-Origin and Access-Control-Allow-Headers headers to allow requests from any origin and to allow the Content-Type header
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Connect to the MongoDB database
mongoose.connect(
  "mongodb+srv://adraou:zK6MtmBYDJfhzFxP@cluster0.wpjzqz0.mongodb.net/test?authSource=admin&replicaSet=atlas-kunhgr-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Define a schema and model for the email data
const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});
const Email = mongoose.model("Email", emailSchema);

// Create an API endpoint to handle email submissions
app.post("/api/submit-email", async (req, res) => {
  const email = req.body.email;

  const newEmail = new Email({ email });
  try {
    await newEmail.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Start the express app
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
