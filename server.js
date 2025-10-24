const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Demo/Simulation Mode
app.post('/sms', async (req, res) => {
  const { numbers, message } = req.body;

  // Always simulate success (for demo without actual SMS API call)
  res.json({
    return: true,
    message: `SMS sent successfully to ${numbers}! (SIMULATION)`
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('SMS proxy server running on port', PORT));
