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
    return response.data;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
}

export async function fetchSchedule(
  date: string,
): Promise<(Event | Session)[]> {
  try {
    const response = await axios.get(
      `http://localhost:8080/getTimeLineByDate?date=${date}`,
    );
    return response.data;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
}

export async function fetchBookmarkedSchedule(
  userId: string,
  dateString: string,
): Promise<(Event | Session)[]> {
  try {
    const response = await axios.get(
      `http://localhost:8080/getBookmarkedEvents?date=${dateString}&id=${userId}`,
    );
    return response.data;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
}

export async function addBookmark(
  userId: string,
  eventId: string,
): Promise<void> {
  try {
    const response = await axios.post(
      "http://localhost:8080/addBookmark",
      null,
      {
        params: {
          idEvent: eventId,
          idParticipant: userId,
        },
        maxBodyLength: Infinity,
      },
    );
    console.log("Bookmark added successfully:", response.data);
  } catch (error) {
    console.error("Error adding bookmark:", error);
    throw error;
  }
}

export async function removeBookmark(
  userId: string,
  eventId: string,
): Promise<void> {
  try {
    const response = await axios.delete(
      "http://localhost:8080/removeBookmark",
      {
        params: {
          idEvent: eventId,
          idParticipant: userId,
        },
        maxBodyLength: Infinity,
      },
    );
    console.log("Bookmark deleted successfully:", response.data);
  } catch (error) {
    console.error("Error deleting bookmark:", error);
    throw error;
  }
}
