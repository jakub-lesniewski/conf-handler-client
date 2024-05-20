import { Schedule } from "@/types/Schedule";
import { User } from "./AuthContext";
import axios from "axios";

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

export async function fetchTimeline(date: string): Promise<Schedule> {
  try {
    const response = await axios.get(
      `http://localhost:8080/getTimeLineByDate?date=${date}`,
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
}
