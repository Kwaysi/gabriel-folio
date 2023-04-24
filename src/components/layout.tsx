import { Footer } from "./footer";
import { Header } from "./header";

type LayoutProps = {
	children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
