import { NewsResponse } from "@/types";

export async function getNewsBasedOnCategory(category: string) {
	const response = await fetch(
		`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${process.env.NEWS_API_KEY}`
	);
	const newsResponse: NewsResponse = await response.json();
	return newsResponse;
}
