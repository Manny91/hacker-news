export const BASE_URL = "https://hacker-news.firebaseio.com/v0/";

async function get(endpoint: string) {
  const res = await fetch(`${BASE_URL}${endpoint}.json?print=pretty`, {
    headers: getRequestHeaders(),
  });

  await checkHTTPError(res);
  return res;
}

function getRequestHeaders() {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  return headers;
}

async function checkHTTPError(res: Response) {
  if (res.ok) {
    return;
  }

  let errText = await res.text();
  if (!errText) {
    errText = "No Error from server.";
  }

  throw new NetworkError(errText, res.status);
}

export class NetworkError {
  public name = "NetworkError";

  constructor(public message: string, public code: number) {
    this.message = `${code} - ${message}`;
  }
}

export default {
  get,
};
