import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prismaClient } from "@repo/db/client";
import { NotFoundError, UnauthorizeError } from "../errorHandlers/client-error";

class UserRepository {
  constructor() {}

  async SignUp(data: any) {
    try {
      const hashedPassword = bcrypt.hashSync(data.password, 10);
      const User = await prismaClient.user.create({
        data: { name: data.name, email: data.email, password: hashedPassword },
      });
      const jwtToken = jwt.sign({ id: User }, "Pavan");
      console.log("token", jwtToken);
      console.log("user", User);
      return jwtToken;
    } catch (error) {
      console.log("error has occured at user controller");
      throw error;
    }
  }

  async SignIn(data: any) {
    try {
      const user = await prismaClient.user.findUnique({
        where: { email: data.email },
      });
      if (!user) {
        throw new NotFoundError("User not found in database");
      }
      const isMathPassword = bcrypt.compareSync(data.password, user.password);
      if (!isMathPassword) {
        throw new UnauthorizeError("Password did'nt matched");
      }
      const jwtToken = jwt.sign({ id: user?.id }, "Pavan");
      return jwtToken;
    } catch (error) {
      console.log("Error has occured at repository controller");
      throw error;
    }
  }
}
export { UserRepository };
