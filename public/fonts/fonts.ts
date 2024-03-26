import localFont from "next/font/local";
import {Passion_One} from "next/dist/compiled/@next/font/dist/google";

export const fontPoetsenOne = localFont({
	src: "PoetsenOne-Regular.ttf",
	display: "swap",
	weight: "400",
	variable: "--font-poetsenone",
});

export const fontPassionOne = Passion_One({
	display: "swap",
	subsets: ["latin"],
	weight: "400",
	variable: "--font-passionone",
});
