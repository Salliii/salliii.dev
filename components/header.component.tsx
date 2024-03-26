import Link from "next/link";

export type HeaderComponentLinks = {
	name: string,
	href: string
}

export type HeaderComponentProps = {
	links: HeaderComponentLinks[]
}
export default function HeaderComponent(props: HeaderComponentProps) {
	return (
		<header className={"w-full h-32 px-36 bg-black flex flex-row justify-between items-center"}>
			<Link className={"text-5xl text-highlight-header font-passionone"}
				href={"/"}>
				Salliii.dev
			</Link>
			<div className={"w-fit h-fit flex flex-row gap-12"}>
				{
					props.links.map((link) => {
						return (
							<Link className={"text-5xl text-text-basic font-passionone"}
								href={link.href}>
								{link.name}
							</Link>
						);
					})
				}
			</div>
		</header>
	);
}
