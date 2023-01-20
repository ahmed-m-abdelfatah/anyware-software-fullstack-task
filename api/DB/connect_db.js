import mongoose from 'mongoose';

const connectDB = async uri => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(uri);
    console.log(`connected to mongodb at ${uri}`);
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
