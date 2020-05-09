import httpClient from "../../services/httpClient";

export type StoryType = "job" | "comment" | "poll" | "pollopt" | "story";
export interface Story {
  id: number;

  type: StoryType;
  by: string;
  time: number;
  text: string;
  kids: number[];
  url: string;
  score: number;
  title: string;
  descendants: number;
}
export async function getTopStories(): Promise<number[]> {
  const res = await httpClient.get(`topstories`);
  return res.json();
}

export async function getMostRecentStories(): Promise<number[]> {
  const res = await httpClient.get(`newstories`);
  return res.json();
}

export async function getStoryDetail(storyId: number): Promise<Story> {
  const res = await httpClient.get(`item/${storyId}`);
  return res.json();
}

export default {
  getTopStories,
  getStoryDetail,
  getMostRecentStories,
};
