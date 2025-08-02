const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');

require('dotenv').config();

const authRoutes = require('./routes/auth');

const dataRoutes=require('./routes/dataRoute')

const app = express();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log(err);
});

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/startups',dataRoutes)

 const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
 });
 
