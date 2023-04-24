import { NewsResponse } from "@/types";

export async function getNews(): Promise<NewsResponse> {
	const response = await fetch(
		"https://newsapi.org/v2/top-headlines?country=us&apiKey=" +
			process.env.NEWS_API_KEY
	);
	const newsResponse: NewsResponse = await response.json();
	return newsResponse;
}
