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
			<body>{children}</body>
		</html>
	);
}
