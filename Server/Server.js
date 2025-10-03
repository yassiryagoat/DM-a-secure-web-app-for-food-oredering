const express = require("express");
const mongoose = require("mongoose")//mongoose library
const cors = require("cors")
const bcrypt = require("bcrypt"); // const bcrypt library


    //connect to express app 
    const app = express()

    //use midlleware
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json()) 
    app.use(cors())

    //api end point
    //app.use('/api/food',foodRouter)
   // app.use('/images',express.static('uploads'))
   // app.use('/api/user',userRoute)
   // app.use('/api/cart',cartRouter)
   // app.use('/api/order',orderRouter)
    
    const ClientModel=require("./models/ClientModule");
    //Connect to MongoDB
    mongoose.connect("mongodb://127.0.0.1:27017/ClientDB")
        .then(()=>
            {
                console.log('connected to ClientDB');
                app.listen(3001,()=>
                    {
                        console.log('app is running on 3001');
                        app.get("/",(req,res)=>{
                            res.send("API working");
                        })
                    }
                )
            }
        )
        .catch((error)=>console.log('enable to connect to mongodb and/or app'))

        app.post('/register', async (req, res) => {
            try {
                const { lastname, firstname, email, password } = req.body;
        
                // Validate password
                
        
                // Hash password
                const hashedPassword = await bcrypt.hash(password, 10);
        
                // Create new user
                await ClientModel.create({ lastname, firstname, email, password: hashedPassword });
        
                res.json('Sign up Succeeded');
            } catch (err) {
                if (err.code === 11000) {
                    res.json('Failed Sign up: Email already exists');
                } else {
                    res.json('Failed Sign up with error');
                }
            }
        });
        

    app.post('/login', async (req, res) => {
        const { email, password } = req.body; 
        try {
            const user = await ClientModel.findOne({ email: email });
            if (user) {
                const match = await bcrypt.compare(password, user.password);
                if (match) {
                    res.json('Login Succeeded');
                } else {
                    res.json('Incorrect password');
                }
            } else {
                res.json('Failed login: Email not found');
            }
        } catch (err) {
            res.json('Failed login with error');
        }
    });
    
    


/*
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/FoodRout.js"
import userRoute from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRout.js"




// app config

const app = express()
const port = 3001

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()) // use json to send data from fent a=end to backend
app.use(cors())  // accee to backend from eny frentend


// DB connection
connectDB();

// api enpoints
app.use('/api/food',foodRouter)
app.use('/images',express.static('uploads'))
app.use('/api/user',userRoute)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)



app.get("/",(req,res)=>{
    res.send("API  Working ")
})

//run the express server
app.listen(port,()=>(
    console.log(`Serveur démarré on http://localhost:${port}`)
)) 


app.post('/register', async (req, res) => {
    try {
        const { lastname, firstname, email, password } = req.body;

        // Validate password
        

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        await ClientModel.create({ lastname, firstname, email, password: hashedPassword });

        res.json('Sign up Succeeded');
    } catch (err) {
        if (err.code === 11000) {
            res.json('Failed Sign up: Email already exists');
        } else {
            res.json('Failed Sign up with error');
        }
    }
});

//------------------------------------------------
app.post('/login', async (req, res) => {
const { email, password } = req.body; 
try {
    const user = await ClientModel.findOne({ email: email });
    if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            res.json('Login Succeeded');
        } else {
            res.json('Incorrect password');
        }
    } else {
        res.json('Failed login: Email not found');
    }
} catch (err) {
    res.json('Failed login with error');
}
});

/*
  //paypal
  
   
app.post("/api/orders", async (req, res) => {
    try {
      // use the cart information passed from the front-end to calculate the order amount detals
      const { cart } = req.body;
      const { jsonResponse, httpStatusCode } = await createOrder(cart);
      res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
      console.error("Failed to create order:", error);
      res.status(500).json({ error: "Failed to create order." });
    }
  });
    
  app.post("/api/orders/:orderID/capture", async (req, res) => {
    try {
      const { orderID } = req.params;
      const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
      res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
      console.error("Failed to create order:", error);
      res.status(500).json({ error: "Failed to capture order." });
    }
  });
    
  // serve index.html
  app.get("/", (req, res) => {
    res.sendFile(path.resolve("./client/checkout.html"));
  });
    
  app.listen(port, () => {
    console.log(`Node app listening at http://localhost:${port}/`);
  });
*/