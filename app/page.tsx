import HeadlineComponent from "@/components/headline.component";

export default function RootPage() {
	return (
		<div className={"w-full h-full flex flex-col justify-center items-center gap-6 md:gap-12 xl:gap-16"}>
			<HeadlineComponent className={"xl:text-8xl md:text-6xl text-4xl"}>
				<span className={"text-text-basic"}>page under </span>
				<br className={"sm:hidden"}></br>
				<span className={"text-highlight-content"}>construction</span>
			</HeadlineComponent>
			<HeadlineComponent className={"md:text-4xl text-2xl"}>
				<span className={"text-text-basic"}>stay tuned for </span>
				<span className={"text-highlight-content"}>updates</span>
			</HeadlineComponent>
		</div>
	);
}
