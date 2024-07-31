const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Form submission: ${name}, ${email}, ${message}`);
  res.status(200).send("Form submitted successfully");
});

module.exports = router;
