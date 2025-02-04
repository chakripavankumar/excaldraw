import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware.js";
import { CreateRoom, CreateUserSchema, SigninSchema } from "@repo/common/types";
import { prismaClient } from "@repo/db/client";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/signup", async function (req, res) {
  const PrasedData = CreateUserSchema.safeParse(req.body);
  if (!PrasedData.success) {
    console.error("Validation errors:", PrasedData.error.errors); // Log validation issues
    res.json({
      message: "incorrect Inputs",
      details: PrasedData.error.errors, // Include detailed errors for debugging
    });
    return;
  }
  try {
   const newUser= await prismaClient.user.create({
      data: {
        email: PrasedData.data?.username,
        //TODO : need to hash it
        password: PrasedData.data.password,
        name: PrasedData.data.name,
      },
    });
    res.json({
      userId: newUser.id,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    // @ts-ignore
    res
      .status(500)
      .json({ message: "Failed to create user"});
  }
});
app.post("/signin", async function (req, res) {
  const PrasedData = SigninSchema.safeParse(req.body);
  if (!PrasedData.success) {
    res.json({
      message: "incorrect Inputs",
    });
    return;
  }
  // todo: compare the hashedpasswords here
  const user = await prismaClient.user.findFirst({
    where: {
      email: PrasedData.data.username,
      password: PrasedData.data.password,
    },
  });
  if (!user) {
    res.status(403).json({
      message: "Not authorized",
    });
  }

  const token = jwt.sign(
    {
      userId: user?.id,
    },
    JWT_SECRET
  );
  res.json({
    token,
  });
});
app.post("/createRoom", middleware, async function (req, res) {
  const PrasedData = CreateRoom.safeParse(req.body);
  if (!PrasedData.success) {
    res.json({
      message: "incorrect Inputs",
    });
    return;
  } // @ts-ignore
  // todo : fix this
  const userId = req.userId;
  try {
    const room = await prismaClient.room.create({
      data: {
        slug: PrasedData.data.name,
        adminId: userId,
      },
    });
    res.json({
      roomId: room.id,
    });
  } catch (error) {
    res.status(411).json({
      message: "Room already exists with this name",
    });
  }
});

app.get("/chats/:roomId", async (req, res) => {
  const roomId = Number(req.params.roomId);
  const messages = await prismaClient.room.findMany({
    where: {
      id: roomId,
    },
    orderBy: {
      id: "desc",
    },
    take: 100,
  });
  res.json({
    messages,
  });
});

app.listen(3001, function () {
  console.log("listen sucefully on port 3001");
});
