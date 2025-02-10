import { prismaClient } from "@repo/db/client";

export const RoomChats = async (req: any, res: any) => {
    try {
      const roomid = req.query.roomid;
      console.log("Room id in RoomChats", roomid);
      const response = await prismaClient.chat.findMany({
        where: {roomId:Number(roomid)}
      });
  
      res.status(200).json({
        message: "All chats from a room find successfully",
        chats: response,
      });
    } catch (error) {
      res.status(400).json({
        message: "chats from a room can't find successfully",
        err: error,
      });
    }
  };
  