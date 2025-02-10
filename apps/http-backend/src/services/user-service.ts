import { UserRepository } from "../repository";
const userRepository = new UserRepository();

class UserServices {
  constructor() {}

  async SignUp(data: any) {
    try {
      const responce = await userRepository.SignUp(data);
      return responce;
    } catch (error) {
      console.log("Eoor has occured at user controller");
      throw error;
    }
  }

  async SignIn(data: any) {
    try {
      const response = await userRepository.SignIn(data);
      return response;
    } catch (error) {
      console.log("Eoor has occured at user controller");
      throw error;
    }
  }
}

export { UserServices };
