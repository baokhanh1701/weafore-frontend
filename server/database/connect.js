import mongoose from 'mongoose';

export async function collection() {
   const dbUrl = "FILL YOUR DATABASE URL HERE";
   mongoose.connect(dbUrl).then(() => {
    console.log('Connected to database');
   }).catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
   });
}