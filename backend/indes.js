const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log(err);
});

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);


 const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
 });
 
