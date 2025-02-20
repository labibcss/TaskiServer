import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(
      `${process.env.MONGODB_CONN_URI}/taski`
    );
    console.log(
      `Succesfully connected to MongoDB ${conn.connection.db.databaseName} database`
    );
  } catch (err) {
    console.error(`Somethign went wrong to connect with database`);
  }
};
