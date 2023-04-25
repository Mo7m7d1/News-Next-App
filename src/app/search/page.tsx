import SearchForm from "@/components/SearchForm";
import Link from "next/link";

const page = () => {
	return (
		<div className="p-4">
			<Link href="/"> Back </Link>
			<SearchForm />
		</div>
	);
};

export default page;
