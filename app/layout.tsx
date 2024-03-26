import React from "react";
import {fontPassionOne, fontPoetsenOne} from "@/public/fonts/fonts";
import "@/styles/globals.css";
import HeaderComponent from "@/components/header.component";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode,
}) {
	return (
		<html className={`${fontPoetsenOne.variable} ${fontPassionOne.variable}`}
			lang={"en"}>
			<body className={`${fontPassionOne.className}`}>
				<HeaderComponent links={[
					{name: "Home", href: "/"},
					{name: "About", href: "/#about"},
					{name: "Projects", href: "/#projects"},
					{name: "Contact", href: "/#contact"},
				]} />
				{children}
			</body>
		</html>
	);
}
