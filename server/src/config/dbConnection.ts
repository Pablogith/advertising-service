import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


export default class Database {


  static async connect(): Promise<void> {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI || '', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
      });
      console.log(`DB connected to ${conn.connection.host}`)
    } catch (error) {
      console.log(error);
      
    }

  }
}