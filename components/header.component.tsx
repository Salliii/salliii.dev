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
		<header className={"w-full h-32 px-36 bg-black flex flex-row justify-between items-center z-[90]"}>
			<Link className={"text-5xl text-highlight-header font-poetsenone select-none"}
				href={"/"}>
				Salliii.dev
			</Link>
			<div className={"w-fit h-fit flex flex-row gap-12"}>
				{
					props.links.map((link) => {
						return (
							<Link className={"text-5xl text-text-basic font-poetsenone select-none relative z-[91] before:bg-highlight-header after:bg-highlight-header"}
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
