import {z} from "zod";

export const CreateUserSchema = z.object({
    username: z.string().email(),
    password:z.string().min(6),
    name:z.string().min(1),
    photo:z.string().optional()
})

export const SigninSchema = z.object({
    username: z.string().email(), 
    password: z.string().min(6),
})

export const CreateRoom =  z.object({
    name: z.string().min(3).max(6)
})