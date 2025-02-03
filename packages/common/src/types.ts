import { z } from "zod";

export const CreateUserSchema = z.object({
  username: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  name: z.string().min(1, { message: "Name is required" }),
  photo: z.string().optional(),
});

export const SigninSchema = z.object({
  username: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const CreateRoom = z.object({
  name: z.string().min(3).max(6),
});
