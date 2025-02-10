import { prismaClient } from "@repo/db/client";

class RoomRepository {
  constructor() {}

  async CreateRoom(slug: string, userId: number) {
    try {
      const responce = await prismaClient.room.create({
        data: { slug:slug, userId : userId},
      });
      return responce;
    } catch (error) {
      console.log("Error has occured in User controller");
      throw error;
    }
  }

  async GetRooms() {
    try {
      const responce = await prismaClient.room.findMany();
    } catch (error) {
      console.log("Error has been occured in reposatoty controller");
      throw error;
    }
  }

  async GetRoomBySlug(slug: string) {
    try {
      const responce = await prismaClient.room.findFirst({
        where: { slug: slug },
      });
      return responce;
    } catch (error) {
      console.log("Error has been occured in reposatoty controller");
      throw error;
    }
  }
}

export { RoomRepository };
