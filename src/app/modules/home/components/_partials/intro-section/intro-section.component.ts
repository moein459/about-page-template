import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-intro-section",
	templateUrl: "./intro-section.component.html",
	styles: []
})
export class IntroSectionComponent implements OnInit {
	highlight = false;

	constructor() {}

	ngOnInit(): void {}

	onInViewportChange(inViewport: boolean) {
		this.highlight = this.highlight || inViewport;
	}
}
