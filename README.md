# ZeroWaste

An AI-powered system that calls restaurants to get food donations for homeless people.

## The Problem

Restaurants throw away tons of good food every day. At the same time, homeless people don't have enough to eat. There's no easy way to connect the two.

## How It Works

1. **AI Calls Restaurants** - Our program automatically calls restaurants using VAPI AI voice technology to ask if they have extra food to donate.

2. **Collects Information** - The AI asks about what food is available, when it can be picked up, where to get it, and if they're willing to donate.

3. **Saves Donations** - When a restaurant says yes, all the details get saved to our server automatically.

4. **Food Gets Distributed** - The food is picked up and given to people who need it.

## Tech Stack

- **VAPI AI** - for the voice calls
- **Python** - to run the calling script
- **Node.js + Express** - for the server
- **REST APIs** - to connect everything

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
npm install
```

2. Create a `.env` file with your VAPI credentials:
```
VAPI_API_KEY=your_api_key_here
VAPI_ASSISTANT_ID=your_assistant_id_here
VAPI_PHONE_NUMBER_ID=your_phone_number_id_here
```

3. Add phone numbers to `phone_numbers.txt` (one per line)

## Running the App

1. Start the server:
```bash
node server.js
```

2. Run the calling script (in another terminal):
```bash
python main.py
```

The Python script will call each phone number, the AI will talk to the restaurants, and the server will log all the donation info to `donations.txt`.

## Why It Matters

This project reduces food waste, helps homeless people get meals, and automates the whole process so it can scale up to help more people.

## Built By

Nicholas & Dennis for CodeKong Hackathon 2025
