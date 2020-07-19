import mongoose from "mongoose";

export default async (db: any): Promise<void> => {
  await mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true }, () => {
    console.log(`Successfully connected to ${db}`)
  });
};