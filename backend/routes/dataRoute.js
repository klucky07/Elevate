const express = require("express");
const { Startups } = require("../models/Database");
const router = express.Router();
const newData =require('../data/data')

router.post("/seed", async (req, res) => {
  try {
   
    await Startups.deleteMany(); // Optional: clear existing data
    const result = await Startups.insertMany(newData);
    res.status(200).json({ message: "Data inserted", count: result.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get('/getdata',async(req,res)=>{
    try {
        const startuData=await Startups.find();
        res.status(200).json(startuData)
    } catch (error) {
         res.status(500).json({ error: error.message });
    }
})
module.exports=router