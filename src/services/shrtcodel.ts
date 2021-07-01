import axios from "axios";

type ApiResponse = {
  data: { result: { full_short_link: string } };
};

export async function getShortUrl(longUrl: string) {
  const response: ApiResponse = await axios.get(
    ` https://api.shrtco.de/v2/shorten?url=${longUrl}`
  );
  return {newShortUrl: response.data.result.full_short_link, newLongUrl: longUrl}
}
