import httpClient from "../../services/httpClient";

export interface NewsResponse {
  next: string;
  previous: string;
}

export async function getNewStories(): Promise<NewsResponse> {
  const res = await httpClient.get(`newstories`);
  return res.json();
}

export default {
  getNewStories,
};
