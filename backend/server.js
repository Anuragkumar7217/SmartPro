const dotenv = require("dotenv");
const app = require("./src/app");
const connectDB = require("./src/config/db");

dotenv.config();

const PORT = process.env.PORT || 3001;

const startServer = () => {
  // 1. Port pehle listen karo taaki Render ko 502 Error na dena pade
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
  // 2. MongoDB background me connect hone do
  connectDB();
};

// const startServer = async () => {
//   // Wait for database connection first
//   await connectDB();

//   // Start listening only after DB is connected
//   app.listen(PORT, "0.0.0.0", () => {
//     // app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// };

startServer();


// npm run dev -- --host
// npx vite --host