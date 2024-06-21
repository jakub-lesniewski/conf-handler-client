import { Event } from "@/types/Event";
import axios from "axios";
import { Session } from "@/types/Session";
import { ConferenceDetails } from "@/types/ConferenceDetails";
import { User } from "@/types/User";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function authenticateUser(
  email: string,
  password: string,
): Promise<User> {
  try {
    const response = await axios.post(`${BASE_URL}/authenticate`, {
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.error("Error authenticating user:", error);
    throw error;
  }
}

export async function fetchConferenceDetails(): Promise<ConferenceDetails> {
  try {
    const response = await axios.get(`${BASE_URL}/conferenceDetails`);
    return response.data;
  } catch (error) {
    console.error("Error fetching conference details:", error);
    throw error;
  }
}

export async function fetchSchedule(
  date: string,
): Promise<(Event | Session)[]> {
  try {
    const response = await axios.get(
      `${BASE_URL}/getTimeLineByDate?date=${date}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching schedule:", error);
    throw error;
  }
}

export async function fetchBookmarkedSchedule(
  userId: string,
  dateString: string,
): Promise<(Event | Session)[]> {
  try {
    const response = await axios.get(`${BASE_URL}/getBookmarkedEvents`, {
      params: {
        date: dateString,
        id: userId,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching bookmarked schedule:", error);
    throw error;
  }
}

export async function addBookmark(
  userId: string,
  eventId: string,
): Promise<void> {
  try {
    const response = await axios.post(`${BASE_URL}/addBookmark`, null, {
      params: {
        idEvent: eventId,
        idParticipant: userId,
      },
    });
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
    const response = await axios.delete(`${BASE_URL}/removeBookmark`, {
      params: {
        idEvent: eventId,
        idParticipant: userId,
      },
    });
    console.log("Bookmark deleted successfully:", response.data);
  } catch (error) {
    console.error("Error deleting bookmark:", error);
    throw error;
  }
}
