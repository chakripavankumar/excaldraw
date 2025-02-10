import express from "express";
import cors  from "cors";
import bodyParser from "body-parser";
import {apiRoutes}  from "./routes";



const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api", apiRoutes)

app.listen(3200 , async ()=>{
  console.log("server is runnig on PORT 3200");
  
})