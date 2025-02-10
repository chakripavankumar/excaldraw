import express from "express";
import {RoomChats} from "../../controllers";

const chatRouter : any = express.Router();

chatRouter.get ( "/meesage", RoomChats);

export {chatRouter}