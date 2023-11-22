const express = require('express');

const cors = require('cors');
const mongoose=require('mongoose');
const path=require('path');
const app=new express();
app.use(express.static(path.join(__dirname,"frontend","build")));
const employeedata = require('./model/employee');
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

require("./db/connect");
app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"frontend","build","index.html"));
  });
const emprouter=require('./routes/basic');
app.use('/emp',emprouter);




  
  const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})