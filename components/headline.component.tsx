"use client";

import React, {HTMLAttributes} from "react";

export type HeadlineComponentProps = {
	children?: React.ReactNode,
} & HTMLAttributes<HTMLDivElement>

export default function HeadlineComponent(props: HeadlineComponentProps) {
	return (
		<div {...props} className={`${props.className} flex flex-row`}>
			<span className={"text-text-dimmed select-none"}>
				&lt;
			</span>
			<div>
				{props.children}
				<span className={"text-text-dimmed select-none"}>
					&gt;
				</span>
			</div>
		</div>
	);
}
