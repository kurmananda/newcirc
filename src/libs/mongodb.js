import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      return true;
    } else {
      const connectionInstance = await mongoose.connect(
        `${process.env.MONGODB_URI}`,
        {
          connectTimeoutMS: 30000,
        }
      );

      return true;
    }
  } catch (error) {
    console.error("Failed to Connect to Database || Error: ", error);
    throw error;
  }
};
export default connectDB;
