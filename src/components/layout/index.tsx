import { Contact } from "../contact";
import { Footer } from "./footer";
import { Header } from "./header";
import { PageTitle } from "./title";

type LayoutProps = {
	showTitle?: boolean;
	children?: React.ReactNode;
};

export function Layout({ children = "", showTitle = true }: LayoutProps) {
	return (
		<>
			<Header />
			<main className="max-w-6xl mx-auto p-1">
				{showTitle && <PageTitle />}
				{children}
			</main>
			<Contact />
			<Footer />
		</>
	);
}
