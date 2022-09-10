const express = require("express")
const mysql = require("mysql");

const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Vikram@11",
    database:"users",
})

app.get("/allData",(req,res)=>{
    db.query("SELECT * FROM registartion",(err,result)=>{
        if(err){
            console.log('error')
        }
        else{
            res.send(result);
        }
    })
})

app.post("/login",(req,res)=>{
    const name =req.body.name;
    const password = req.body.password;

    db.query(
        "SELECT * FROM registartion WHERE name=? AND password = ?",[name, password],
        (err, result)=>{
            if(err){
                res.send({err: err})
            }
            if(result.length>0){
                res.send(result);
            }
            else{
                res.send({message:"Please Enter the valid UserName Password"})
            }
        }
    )
})



app.post("/register", (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const cpassword = req.body.cpassword;
    const company = req.body.appt;
    db.query(
        "INSERT INTO registartion(name, email, password, cpassword, company) VALUES (?,?,?,?,?)",
        [name,email, password,cpassword, company],(err, result) =>{
           if(err){
               console.log("erre")
           }
           else{
               res.send("value inserted")
           }
        }
    );
    console.log("test")
});

app.listen(3005, ()=>{
    console.log('test')
})
