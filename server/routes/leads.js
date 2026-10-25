const router = require("express").Router();
const Lead = require("../models/Lead");

router.post("/", async (req, res) => {
  try {
    const { name, email, country, dial, phone } = req.body;

    if (!name || !email || !country || !dial || !phone)
      return res.status(400).json({ error: "All fields are required" });
    if (!/^\S+@\S+\.\S+$/.test(email))
      return res.status(400).json({ error: "Invalid email" });
    if (!/^\+\d{1,4}$/.test(dial) || !/^\d{6,14}$/.test(phone))
      return res.status(400).json({ error: "Invalid phone" });

    await Lead.findOneAndUpdate(
      { email: email.toLowerCase() },
      { name, country, dial, phone },
      { upsert: true, new: true, runValidators: true }
    );

    res.status(201).json({ success: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/", async (req, res) => {
  if (req.get("x-admin-key") !== process.env.ADMIN_KEY)
    return res.status(401).json({ error: "Unauthorized" });

  const leads = await Lead.find().sort({ createdAt: -1 });
  res.json({ count: leads.length, leads });
});

module.exports = router;