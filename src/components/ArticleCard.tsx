import { NewsArticle } from "@/types";
import Image from "next/image";

export type ArticleCardProps = {
	article: NewsArticle;
};

const ArticleCard = ({
	article: { title, description, url, urlToImage, publishedAt, source },
}: ArticleCardProps) => {
	const validImage =
		urlToImage?.startsWith("http") || urlToImage?.startsWith("https")
			? urlToImage
			: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
	return (
		<div className="flex flex-col h-full">
			<div className="flex flex-col justify-between h-full border border-gray-300 bg-white dark:bg-slate-950 dark:border-slate-600 rounded-lg overflow-hidden shadow-md hover:shadow-lg dark:hover:shadow-slate-700/30 transition-shadow duration-200">
				<a href={url} target="_blank">
					<img
						src={validImage}
						alt="article image"
						className="h-48 w-full object-cover bg-gray-200"
						loading="lazy"
						decoding="async"
					/>
					<div className="p-4">
						<h1 className="text-lg font-semibold">{title}</h1>
						<p className="text-sm text-gray-500">{description}</p>
					</div>
				</a>
				<div className="flex justify-between items-center p-3">
					<p className="text-sm text-gray-500">
						{new Date(publishedAt).toLocaleString(undefined, {
							dateStyle: "medium",
							timeStyle: "short",
						})}
					</p>
					<div className="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 fill-current text-blue-500 mr-1"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M10 1c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-2.758 0-5-2.242-5-5s2.242-5 5-5 5 2.242 5 5-2.242 5-5 5z"
								clipRule="evenodd"
							/>
							<path d="M10 4a1 1 0 100 2 1 1 0 000-2zm1.5 3a1 1 0 11-2 0 1 1 0 012 0zm-4 0a1 1 0 11-2 0 1 1 0 012 0zm1.5 3a1 1 0 11-2 0 1 1 0 012 0z" />
						</svg>
						<p className="text-sm text-gray-500">{source?.name}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArticleCard;
