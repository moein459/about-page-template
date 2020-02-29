import { Component, OnInit, Input } from "@angular/core";
import { Feature } from '../../../models/feature.model';

@Component({
	selector: "app-feature-item",
	templateUrl: "./feature-item.component.html",
	styles: []
})
export class FeatureItemComponent implements OnInit {
	@Input() feature: Feature;

	constructor() {}

	ngOnInit(): void {}
}
