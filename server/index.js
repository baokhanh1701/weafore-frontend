import express from 'express';
import {collection}  from './database/connect.js';
import Users from './Models/Users.js';
import cors from 'cors';
// Call the connect function
collection().catch(console.error);

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.get("/",cors(), (req, res) => {
    res.json("Welcome to Weafore");
});

app.post("/signin",cors(), async (req, res) => {
    const{email,password} = req.body;
    try{
        const check = await Users.findOne({email:email});
        if(check){
            if(check.password === password){
                res.json({message: "Login successful", username: check.username});
            }
            else{
                res.json("Incorrect password");
            }
        }
        else{
            res.json("User not found");
        }
    }
    catch(e){
        res.json(e);
    }
});

app.post("/signup",cors(), async (req, res) => {
    const{username,email,password} = req.body;
    const data = {
        username: username,
        email:email,
        password:password
    }
    try{
        const check = await Users.findOne({email:email});
        if(check){
            res.json("User already exists");
        }
        else{
            const user = new Users(data);
            await user.save();
            res.json("User created");
        }
    }
    catch(e){
        res.json(e);
    }
});

//i want to print all my database 
app.get("/users",cors(), async (req, res) => {
    try{
        const data = await Users.find();
        res.json(data);
    }
    catch(e){
        res.send(e);
    }
});

app.listen(8000, () => console.log('Server is running...'));