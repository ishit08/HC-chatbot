# Hospital Management System with Voice Assistant

A modern web-based Hospital Management System featuring an interactive voice-enabled chatbot for hands-free operation.

## Features

- Interactive voice-enabled chatbot
- Voice command recognition
- Patient management with voice input
- Real-time data processing
- Modern and responsive UI
- MongoDB integration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Modern web browser with microphone support

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hospital-management-system
```

2. Install server dependencies:
```bash
cd server
npm install
```

3. Install client dependencies:
```bash
cd ../client
npm install
```

4. Create a `.env` file in the server directory with the following content:
```
MONGO_URI=mongodb://localhost:27017/hospital_management
PORT=5000
```

## Running the Application

1. Start the MongoDB server on your local machine.

2. Start the backend server:
```bash
cd server
npm run dev
```

3. Start the frontend application:
```bash
cd client
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Voice Commands

- Say "Create Patient" to open the patient creation form
- Use the microphone buttons to input patient details via voice

## Technologies Used

- Frontend:
  - React
  - TypeScript
  - Styled Components
  - React Speech Recognition
  - Material-UI

- Backend:
  - Node.js
  - Express
  - TypeScript
  - MongoDB
  - Mongoose

## License

This project is licensed under the ISC License. 