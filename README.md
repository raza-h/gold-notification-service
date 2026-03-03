# AurumPulse: Gold Notification Service - WhatsApp 📣

A Node.js service that consumes messages from a Kafka topic and sends WhatsApp alerts. Ideal for real-time notifications and automating message delivery via WhatsApp.

## Features

- ✨ Consumes events from a Kafka topic  
- 📱 Sends WhatsApp alerts based on incoming messages  
- ⚙️ Configurable via `.env` variables (Kafka brokers, topic, Twilio API keys)  
- 🚀 Lightweight Node.js setup for fast deployment  
- 🔄 Real-time message processing  

## Getting Started

### Prerequisites

- Node.js v18+  
- Kafka cluster access  
- WhatsApp API credentials (Twilio)

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Notification Channels](#notification-channels)
- [Contributing](#contributing)
- [License](#license)

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/raza-h/gold-notification-service.git
cd gold-notification-service
yarn       # or npm i
yarn dev   # or npm run dev
```

## Configuration

Create a `.env` file in the root directory with the following variables:
```env
# Twilio Configuration (for WhatsApp notifications)
TWILIO_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_FROM_NUMBER=+15551234567
TWILIO_TEMPLATE_SID=HXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# Kafka Configuration (Event Consumption)
KAFKA_BROKER_URL=HOST:PORT
```

## Project Structure

```
.
├── constants.js       # Configuration constants
├── index.js           # Cron setup
├── utils.js           # Helper functions (formatting)
├── config/
│   ├── consumer.js    # Kafka consumer configuration
│   ├── twilio.js      # Twilio client configuration
│   └── logger.js      # Winston logger configuration
├── entities/
│   └── WhatsappJob.js   # Implementation for sending WhatsApp messages via Twilio
├── .env.example       # Example environment variables
├── .gitignore
├── Dockerfile
├── package.json
├── yarn.lock
└── README.md
```

## Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `TWILIO_SID` | Twilio account SID for SMS | Yes | - |
| `TWILIO_AUTH_TOKEN` | Twilio authentication token | Yes | - |
| `TWILIO_FROM_NUMBER` | Twilio phone number (sender) | Yes | - |
| `TWILIO_TEMPLATE_SID` | Price change threshold for alerts | No | - |
| `KAFKA_BROKER_URL` | Kafka broker url for event consumption | Yes | - |

## Notification Channels

### WhatsApp (Twilio)

Configure Twilio credentials in `.env`:

```env
TWILIO_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_FROM_NUMBER=+15551234567
TWILIO_TEMPLATE_SID=HXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
KAFKA_BROKER_URL=HOST:PORT
```

## Troubleshooting

### Common Issues

**Notification failures:**
- Check Twilio account balance
- Check if sending is restricted due to Free Plan
- Check if WhatsApp sender and content template is configured for sending messages outside the 24-hour messaging window. I can help you set up an alternative that I use to save costs (Reach out via LinkedIn or email)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

## License

MIT License
