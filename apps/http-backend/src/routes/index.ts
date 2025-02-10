import express  from "express";
import {apiRoutes} from "./v1";

const apiRoutes: any= express.Router();

apiRoutes.use("/v1", apiRoutes);

export {apiRoutes}