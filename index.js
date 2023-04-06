const express = require("express");
const app = express();
const PORT = 3000;
const database = require("./src/database");
app.listen(PORT,(err)=>{
    if(err) console.log(err);
    else console.log("Server is running...");
});

app.get("/",(req,res)=>{
    const Student = require("./src/models/student");
    let s = new Student({
        email:"abc@gmail.com",
        name: "Student",
        birthday: "1999-12-13"
    });
    s.save().then(rs=>{
        res.send("done");
    }).catch(err=>{
        res.send(err);
    })
})