import express from "express";
import jwt  from "jsonwebtoken";
import { JWT_SECRET } from '@repo/backend-common/config'
import { middleware } from "./middleware";
import {CreateRoom, CreateUserSchema, SigninSchema} from "@repo/common/types"
import {prismaClient} from "@repo/db/client"
const app = express();

app.post('/signup', function (req,res){
 
   const data = CreateUserSchema.safeParse(req.body)
   if(!data.success){
    res.json({
        message:"incorrect Inputs"
    })
    return;
   }
     // db call
   res.json({
    userId:"123"
   })
})
app.post('/signin' , function(req,res){
    const data = SigninSchema.safeParse(req.body)
   if(!data.success){
    res.json({
        message:"incorrect Inputs"
    })
    return;
   }
    const userId =1 ;
    const token = jwt.sign({
        userId
    },JWT_SECRET)
    res.json({
        token
    })

})
app.post('/createRoom' , middleware , function (req,res){
    const data = CreateRoom.safeParse(req.body)
   if(!data.success){
    res.json({
        message:"incorrect Inputs"
    })
    return;
   }
       // db call
       res.json({
        roomId:123
       })

})


app.listen(3001, function(){
    console.log("listen sucefully on port 3001");
    
})