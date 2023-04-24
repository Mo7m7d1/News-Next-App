import Articles from "@/components/Articles";
import { getNews } from "@/methods/getNews";

export const metadata = {
	title: "Breaking News",
};

export default async function BreakingNewsPage() {
	const { articles } = await getNews();

	return (
		<main className="p-4">
			<h1 className="text-3xl font-bold mb-5">Breaking News:</h1>
			<Articles articles={articles.slice(0, 12)} />
		</main>
	);
}
