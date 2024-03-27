export function setUnderline(target: HTMLElement, state: boolean) {
	if (state) {
		target.classList.remove("underline-off");
		target.classList.add("underline-on");
	} else {
		target.classList.remove("underline-on");
		target.classList.add("underline-off");
	}
}
