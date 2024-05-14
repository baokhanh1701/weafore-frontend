import mongoose from 'mongoose';

export async function collection() {
   const dbUrl = "mongodb+srv://Khoa2807:Khoa280703@weafore.mzm1g3t.mongodb.net/users_data";
   mongoose.connect(dbUrl).then(() => {
    console.log('Connected to database');
   }).catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
   });
}