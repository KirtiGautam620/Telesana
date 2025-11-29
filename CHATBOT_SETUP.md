# MediBuddy Chatbot Integration Guide

This guide explains how to run the MediBuddy chatbot integrated with the Telesana frontend.

## Overview

The chatbot integration consists of two parts:
1. **Frontend (Next.js)**: A modern, floating chatbot widget on the homepage
2. **Backend (Flask)**: The MediBuddy AI server that processes medical queries

## Prerequisites

- Node.js (v16 or higher)
- Python (v3.8 or higher)
- pip (Python package manager)

## Setup Instructions

### 1. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 2. Install Backend Dependencies

```bash
cd medibuddy
pip install -r requirements.txt
```

### 3. Environment Variables

The chatbot backend requires API keys which are already configured in `medibuddy/.env`:
- PINECONE_API_KEY (for vector database)
- HUGGINGFACEHUB_API_TOKEN (for the AI model)
- OPENAI_API_KEY (optional, if using OpenAI instead)

## Running the Application

You need to run **both** servers simultaneously in separate terminal windows:

### Terminal 1: Start the MediBuddy Backend

```bash
cd medibuddy
python app.py
```

The Flask server will start on `http://localhost:8080`

You should see output like:
```
* Running on http://0.0.0.0:8080
```

### Terminal 2: Start the Frontend

```bash
cd frontend
npm run dev
```

The Next.js app will start on `http://localhost:3000`

## Using the Chatbot

1. Navigate to `http://localhost:3000/home`
2. You'll see a green circular button in the bottom-right corner
3. Click the button to open the chatbot
4. Ask any medical or health-related questions
5. The chatbot will respond using the MediBuddy AI model

## Features

- **Compact Design**: Floating widget that doesn't obstruct the main content
- **Modern UI**: Clean, professional interface matching Telesana's design
- **Responsive**: Works on both desktop and mobile devices
- **Real-time Responses**: Typing indicators and smooth animations
- **Easy Toggle**: Click to open/close the chatbot

## Troubleshooting

### Chatbot shows "having trouble connecting" error

**Cause**: The Flask backend is not running or not accessible.

**Solution**:
1. Make sure you've started the Flask server in a separate terminal
2. Check that it's running on port 8080
3. Verify there are no firewall issues blocking localhost:8080

### Import errors in Python

**Cause**: Missing dependencies.

**Solution**:
```bash
cd medibuddy
pip install -r requirements.txt
```

### Frontend build errors

**Cause**: Missing Node.js dependencies.

**Solution**:
```bash
cd frontend
npm install
```

## Architecture

```
┌─────────────────────────────┐
│   Next.js Frontend          │
│   (Port 3000)               │
│   - Chatbot Component       │
│   - Homepage Integration    │
└──────────┬──────────────────┘
           │ HTTP POST
           │ /get endpoint
           ▼
┌─────────────────────────────┐
│   Flask Backend             │
│   (Port 8080)               │
│   - LangChain RAG           │
│   - Pinecone Vector DB      │
│   - HuggingFace LLM         │
└─────────────────────────────┘
```

## Customization

### Change Chatbot Position

Edit [frontend/src/components/Chatbot.css](frontend/src/components/Chatbot.css):

```css
.chatbot-toggle {
  bottom: 24px;  /* Change this value */
  right: 24px;   /* Change this value */
}
```

### Change Chatbot Colors

The chatbot uses Telesana's color scheme:
- Primary: `#16a34a` (green)
- Secondary: `#337af5` (blue)

Edit these in [Chatbot.css](frontend/src/components/Chatbot.css) to match your branding.

### Modify Welcome Message

Edit [frontend/src/components/Chatbot.jsx](frontend/src/components/Chatbot.jsx):

```jsx
<h5>Welcome to MediBuddy</h5>
<p>Ask me any medical or health-related questions!</p>
```

## Next Steps

- Deploy both servers to production
- Add authentication to the chatbot API
- Implement rate limiting
- Add conversation history persistence
- Integrate with user accounts

## Support

For issues or questions, please refer to the main README or create an issue in the repository.
