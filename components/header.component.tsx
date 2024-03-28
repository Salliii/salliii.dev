"use client";

import Link from "next/link";
import {setUnderline} from "@/utils/styles";

export type HeaderComponentLinks = {
	name: string,
	href: string
}

export type HeaderComponentProps = {
	links: HeaderComponentLinks[]
}
export default function HeaderComponent(props: HeaderComponentProps) {
	return (
		<header className={"w-full h-24 px-8 bg-black flex flex-row justify-between items-center fixed \
		2xl:h-32 2xl:px-36"}>
			<Link className={"text-3xl text-highlight-header font-poetsenone select-none \
			2xl:text-5xl"}
				href={"/"}>
				Salliii.dev
			</Link>
			<div className={"w-fit h-fit hidden flex-row gap-8 \
			2xl:gap-12 md:flex"}>
				{
					props.links.map((link) => {
						return (
							<Link className={"text-3xl text-text-basic font-poetsenone select-none relative \
							before:bg-highlight-header after:bg-highlight-header \
							2xl:text-5xl"}
								href={link.href}
								key={link.name.toLowerCase()}
								onMouseEnter={(event) => setUnderline(event.currentTarget, true)}
								onMouseLeave={(event) => setUnderline(event.currentTarget, false)}>
								{link.name}
							</Link>
						);
					})
				}
			</div>
		</header>
	);
}
