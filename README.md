SMS Sender Extension
A browser extension and Node.js backend to send SMS messages using free/low-cost SMS APIs (Textlocal, Fast2SMS, SMSIndiaHub). The extension offers a simple interface for composing and sending SMS to one or more recipients—ideal for testing, demos, and project learning.

Features
Compose and send SMS messages directly from your browser popup
Supports multiple recipients (comma-separated)
Connects to backend Node.js server (Express)
Uses your chosen SMS API (API Key, username/password method)
Handles input validation, feedback, and error display
Includes basic CORS/proxy setup for local development

sms_sender_extension/
│
├── backend/
│     └── server.js (Express backend, SMS API proxy)
│     └── package.json
│
├── extension/
│     ├── popup.html (frontend UI)
│     ├── popup.js   (frontend JS logic)
│     ├── manifest.json
│
└── README.md
