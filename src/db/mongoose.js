const mongoose = require('mongoose');

let isConnected = false; 
async function connectToDatabase() {
  if (isConnected) return; 
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("Connected to MongoDB database!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

module.exports = connectToDatabase;