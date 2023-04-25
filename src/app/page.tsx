import Articles from "@/components/Articles";
import { getNews } from "@/methods/getNews";
import Link from "next/link";

export const metadata = {
	title: "Breaking News",
};

export default async function BreakingNewsPage() {
	const { articles } = await getNews();

	return (
		<main className="p-4">
			<div className="flex mb-5 justify-between items-center">
				<h1 className="text-3xl font-bold ">Breaking News:</h1>
				<Link
					href="/search"
					className="text-xl font-bold bg-blue-950 p-2 rounded-md hover:opacity-95 shadow-lg"
				>
					Search For News
				</Link>
			</div>
			<Articles articles={articles.slice(0, 12)} />
		</main>
	);
}
