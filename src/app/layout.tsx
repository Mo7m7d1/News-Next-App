import "./globals.css";

export const metadata = {
	title: "News App",
	description: "News Next App description",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<body className="bg-gray-100 dark:bg-slate-900 text-black dark:text-white">
				{children}
			</body>
		</html>
	);
}
