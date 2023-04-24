import { NewsArticle } from "@/types";
import ArticleCard from "./ArticleCard";

export type ArticlesProps = {
	articles: NewsArticle[];
};

const Articles = ({ articles }: ArticlesProps) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{articles.map((article) => (
				<ArticleCard article={article} key={article.url} />
			))}
		</div>
	);
};

export default Articles;
