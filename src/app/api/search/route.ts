import { NewsResponse } from "@/types";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const searchQuery = searchParams.get("q")?.toString();
	if (!searchQuery)
		return NextResponse.json({
			error: "No query provided",
		});

	const response = await fetch(
		`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${process.env.NEWS_API_KEY}`
	);

	const newsResponse: NewsResponse = await response.json();
	return NextResponse.json(newsResponse.articles);
}
