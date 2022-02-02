import mongoose from 'mongoose';

async function database(): Promise<void> {
  try {
    await mongoose.connect(process.env.DATABASE_URL_DEV as string);
    console.log('🛢 Database connected.');
  } catch (error: any) {
    console.error('⭕️ Database connection failded.');
  }
}

export default database;
