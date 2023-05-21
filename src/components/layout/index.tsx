import Script from "next/script";
import { Footer } from "./footer";
import { Header } from "./header";
import { PageTitle } from "./title";
import { Contact } from "../contact";
import { NEXT_PUBLIC_APP_ID, NEXT_PUBLIC_STATS_URL } from "@/utils/constants";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

type LayoutProps = {
	showTitle?: boolean;
	children?: React.ReactNode;
};

export function Layout({ children = "", showTitle = true }: LayoutProps) {
	return (
		<div className={`${inter.className}`}>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0,maximum-scale=1.0,user-scalable=no"
				/>
			</Head>
			<Script async defer data-website-id={NEXT_PUBLIC_APP_ID} src={NEXT_PUBLIC_STATS_URL} />
			<Header />
			<div className="pt-[1px]">
				{showTitle && <PageTitle />}
				{children}
			</div>
			<Contact />
			<Footer />
		</div>
	);
}
