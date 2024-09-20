

 Step-by-Step Setup

 1. Install Node.js and MongoDB
- Ensure you have Node.js and MongoDB installed on your system.
- You can download Node.js from [here](https://nodejs.org/).
- Install MongoDB from [here](https://www.mongodb.com/try/download/community).

 2. Clone the Project Repository
```bash
git clone <your-repo-url>
cd Messaging-App-Prototype
```

 3. Setting Up the Backend
Navigate to the `backend` folder:
```bash
cd backend
```

Install the required dependencies:
```bash
npm install
```

Dependencies used:
- express: Handles routing and middleware.
- cors: Allows cross-origin requests between frontend and backend.
- mongoose: Interacts with MongoDB.
- jsonwebtoken: For creating and verifying authentication tokens.
- bcryptjs: To hash and verify passwords.
- dotenv: To load environment variables.
- socket.io: For real-time communication.

Create a `.env` file in the `backend` folder and add the following:
```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Run the backend server:
```bash
npm start
```

This will start your Express server and establish a connection with MongoDB. The backend runs on port `3000` by default (or another port if you changed it).

 4. Setting Up the Frontend
Navigate to the `frontend` folder:
```bash
cd ../frontend
```

Install the required dependencies:
```bash
npm install
```

Dependencies used:
- react-router-dom: For client-side routing.
- axios: For making API requests to the backend.
- socket.io-client: For real-time communication with the backend.
- tailwindcss/daisyUI: For designing the user interface.

Make sure that the `tailwind.config.js` file includes:
```javascript
module.exports = {
  content: [
    "./src//*.{js,jsx,ts,tsx}",
    "./node_modules/daisyui//*.js"
  ],
  plugins: [require("daisyui")],
};
```

To run the frontend:
```bash
npm run dev
```

This will start the React development server (by default on port `8000`).

 5. Verifying the Application

- Open two tabs in your browser.
- Go to `http://localhost:8000/` (frontend) in both tabs.
- Sign up with two different users.
- Open the chat and start sending messages to see real-time messaging in action.

---

 How the Libraries and Dependencies Were Chosen

1. Express: This lightweight and fast framework simplifies routing and middleware setup. It's perfect for building RESTful APIs for the backend of the app.
  
2. MongoDB & Mongoose: MongoDB is used for storing chat logs and user data because of its flexibility in handling unstructured data. Mongoose helps in schema management and querying MongoDB.

3. JWT & bcryptjs: JWT is used for stateless authentication, and bcrypt is used to ensure secure password hashing.

4. Socket.io: Chosen for real-time, bidirectional communication, enabling features like live messaging between users.

5. React: React’s component-based architecture makes it perfect for building a responsive, dynamic user interface like a chat app.

6. Tailwind CSS & DaisyUI: Tailwind’s utility-first approach allows for rapid styling, and DaisyUI simplifies component design with pre-built elements.

---

 Troubleshooting

1. MongoDB Connection Error: Ensure MongoDB is running on your system or verify the `MONGO_URI` in the `.env` file.

2. CORS Errors: Ensure the CORS configuration is properly set in your backend server. You can adjust this to allow requests only from `http://localhost:8000`:
   ```javascript
   const cors = require('cors');
   app.use(cors({ origin: 'http://localhost:8000', credentials: true }));
   ```

3. Socket Connection Issues: Ensure both the frontend and backend have the correct configurations for `socket.io`. The backend should listen on the correct port and the frontend should connect to the correct backend URL.

---

 Running the Application in Production

1. Build the Frontend:
   ```bash
   npm run build
   ```
   This will create a production-ready version of the frontend.

2. Serve the Frontend Using Express: Ensure that the frontend build folder is served by your Express server (which should already be set up in `server.js`).


### Setup .env file

```js
PORT=...
MONGO_DB_URI=...
JWT_SECRET=...
NODE_ENV=...
```

