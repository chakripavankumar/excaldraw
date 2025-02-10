import { RoomServices } from "../services/room-service";
const roomServices = new RoomServices();

export const CreateRoom = async (req: any, res: any) => {
  try {
    const data = req.data;
    const token = req.headers.token;

    const responce = await roomServices.CreateRoom(data.slug, token);
    res.status(200).json({
      message: "Room created successfully",
      response: responce,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "Room  can't be created ",
      err: error,
    });
  }
};
export const GetRooms = async (req: any, res: any) => {
  try {
    const responce = await roomServices.GetRooms();
    res.status(200).json({
      message: "All room's finded successfully",
      response: responce,
    });
  } catch (error) {
    res.status(400).json({
      message: "fail to find   room successfully",
      err: error,
    });
  }
};
export const GetRoomBySlug = async (req: any, res: any) => {
  try {
    const slug = req.query.slug;
    const responce = await roomServices.GetRoomBySlug(slug);
    res.status(200).json({
      message: "All room finded successfully",
      response: responce,
    });
  } catch (error) {
    res.status(200).json({
      message: "Failed  to find room slug successfully",
      err: error,
    });
  }
};
