import express from "express";
import { userRouter } from "./user-routes";
import { roomRouter } from "./room-routes";
import { chatRouter } from "./chat-routes";

const apiRoutes: any = express.Router();

apiRoutes.use("/user", userRouter);
apiRoutes.use("/room", roomRouter);
apiRoutes.use("/chat", chatRouter);

export { apiRoutes };
