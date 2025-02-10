import express from "express";
import { CreateRoom, GetRooms, GetRoomBySlug } from "../../controllers";

const roomRouter: any = express.Router();

roomRouter.post("/create", CreateRoom);
roomRouter.get("/rooms", GetRooms);
roomRouter.get("/slugroom", GetRoomBySlug);

export { roomRouter };
