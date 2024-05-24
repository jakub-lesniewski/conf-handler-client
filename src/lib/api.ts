import { Event } from "@/types/Event";
import { User } from "./AuthContext";
import axios from "axios";
import { Session } from "@/types/Session";

export async function authenticateUser(
  email: string,
  password: string,
): Promise<User> {
  try {
    const response = await axios.post("http://localhost:8080/authenticate", {
      email: email,
      password: password,
    });
    return response.data.response;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
}

export async function fetchTimeline(
  date: string,
): Promise<(Event | Session)[]> {
  try {
    const response = await axios.get(
      `http://localhost:8080/getTimeLineByDate?date=${date}`,
    );
    return response.data.response;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
}
