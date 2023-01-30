import mongoose from 'mongoose';
import config from './config';

(async () => {
  try {
    mongoose.set('strictQuery', false);
    const db = await mongoose.connect(
      `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`
    );
    console.log('Database connected', db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
