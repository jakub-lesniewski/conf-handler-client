import axios from "axios";
import { User } from "./AuthContext";

export async function authenticateUser(
  email: string,
  password: string,
): Promise<User> {
  try {
    const response = await axios.post("http://localhost:8080/authenticate", {
      email: email,
      password: password,
    });
    console.log(response.data.response);
    return response.data.response;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
}
