export type NewsArticle = {
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage?: string;
	publishedAt: string;
	content: string;
	source?: {
		name: string;
	};
};

export type NewsResponse = {
	articles: NewsArticle[];
};
