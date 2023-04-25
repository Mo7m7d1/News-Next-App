"use client";

import { NewsArticle } from "@/types";
import { FormEvent, useState } from "react";
import Articles from "./Articles";
import Loading from "../components/Loading";

export default function SearchForm() {
	const [searchNews, setSearchNews] = useState<NewsArticle[] | null>(null);
	const [searchNewsLoading, setSearchNewsLoading] = useState(false);
	const [searchNewsError, setSearchNewsError] = useState(false);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const searchQuery = formData.get("searchQuery")?.toString().trim();
		if (searchQuery) {
			try {
				setSearchNews(null);
				setSearchNewsError(false);
				setSearchNewsLoading(true);

				const response = await fetch(`/api/search?q=${searchQuery}`);
				const articles: NewsArticle[] = await response.json();
				setSearchNews(articles);
			} catch (err) {
				console.error(err);
				setSearchNewsError(true);
			} finally {
				setSearchNewsLoading(false);
			}
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="flex gap-2 mb-8 lg:w-[50%] md:w-[50%] sm:w-full mx-auto">
					<input
						type="text"
						name="searchQuery"
						placeholder="Search for news..."
						className="p-2 w-full rounded-md outline-none border-2 border-gray-300 focus:border-blue-500 bg-white dark:bg-slate-950 dark:border-slate-700"
						required
					/>
					<input
						type="submit"
						value="Search"
						className="bg-blue-500 text-white px-2 rounded-md cursor-pointer hover:bg-blue-600 transition-all duration-300 ease-in-out outline-none border-2 border-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:ring-opacity-50 hover:ring-blue-500"
					/>
				</div>
			</form>
			<div>
				{searchNewsLoading && <Loading />}
				{searchNewsError && (
					<p className="text-red-500">
						Something went wrong, please try again...
					</p>
				)}
				{searchNews?.length === 0 && (
					<p className="text-gray-500">
						No results found, Please try a different query...
					</p>
				)}
				{searchNews && <Articles articles={searchNews.slice(0, 12)} />}
			</div>
		</>
	);
}
