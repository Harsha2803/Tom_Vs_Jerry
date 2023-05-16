const express = require("express");

const PORT = process.env.PORT || 3001;

const mysql=require("mysql");

const cors=require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const db=mysql.createConnection({
  user:"root",
  host:"localhost",
  password:"",
  database:"tvj",
})

// app.get('/api',(req,res)=>{
//     res.json({message:"HELLO from server!.."})
// })

app.post('/signup',(req,res)=>{
  const sql="INSERT INTO users (`username`,`email`,`password`) VALUES (?)";
  const values=[
    req.body.username,
    req.body.email,
    req.body.password,
  ]
  db.query(sql,[values],(err,result)=>{
    console.log(err);
    if(err){
      return res.json("Error");
    }
    return res.json(result);
  })
})

app.post('/login',(req,res)=>{
  const sql="SELECT * FROM users WHERE `email`=? AND `password`=?";
  db.query(sql,[req.body.email,req.body.password],(err,result)=>{
    console.log(err);
    if(err){
      return res.json("Error");
    }
    if(result.length>0){
      return res.json("Success");
    }
    else{

      return res.json("failed");
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});