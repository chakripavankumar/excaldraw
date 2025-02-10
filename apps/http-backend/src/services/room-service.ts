import { JwtPayload } from "jsonwebtoken";
import { RoomRepository } from "../repository";
import Jwt from "jsonwebtoken";

const roomRepository = new RoomRepository();

class RoomServices {
  constructor() {}

  async CreateRoom(slug: string, token: string) {
    try {
      const user = Jwt.verify(token, "vinodpr") as JwtPayload;
      const response = await roomRepository.CreateRoom(slug, user.id);
      return response;
    } catch (error) {
      console.log("Eoor has occured at user controller");
      throw error;
    }
  }
  async GetRooms() {
    try {
      const response = await roomRepository.GetRooms();
      return response;
    } catch (error) {
      console.log("Eoor has occured at user controller");
      throw error;
    }
  }

  async GetRoomBySlug(slug: string) {
    try {
      const response = await roomRepository.GetRoomBySlug(slug);
      return response;
    } catch (error) {
      console.log("Eoor has occured at user controller");
      throw error;
    }
  }
}

export { RoomServices };
