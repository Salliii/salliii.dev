import React from "react";
import {fontPassionOne, fontPoetsenOne} from "@/public/fonts/fonts";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode,
}) {
	return (
		<html className={`${fontPoetsenOne.variable} ${fontPassionOne.variable}`}
			lang={"en"}>
			<body className={`${fontPassionOne.className}`}>
				{children}
			</body>
		</html>
	);
}
