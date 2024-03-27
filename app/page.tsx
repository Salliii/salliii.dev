import {HeadlineComponent} from "@/components/headline.component";

export default function RootPage() {
	return (
		<div className={"w-full h-full flex flex-col justify-center items-center gap-16"}>
			<HeadlineComponent className={"text-8xl"}>
				<span className={"text-text-basic"}>page under </span>
				<span className={"text-highlight-content"}>construction</span>
			</HeadlineComponent>
			<HeadlineComponent className={"text-4xl"}>
				<span className={"text-text-basic"}>stay tuned for </span>
				<span className={"text-highlight-content"}>updates</span>
			</HeadlineComponent>
		</div>
	);
}
