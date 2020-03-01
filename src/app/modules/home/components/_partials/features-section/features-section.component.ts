import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Feature } from '../../../models/feature.model';
import { FeatureService } from '../../../services/feature/feature.service';
import { ScrollService } from 'src/app/modules/core/services/scroll/scroll.service';
import { trigger, state, animate, style, transition, query, stagger, animateChild } from '@angular/animations';

@Component({
	selector: "app-features-section",
	templateUrl: "./features-section.component.html",
	styles: [],
	animations: [
		trigger('list', [
			transition(':enter', [
				query('@items', [
					stagger(100, animateChild())
				], {optional: false})
			])
		]),
		trigger('items', [
			state('void', style({'transform': 'scale(.5)', 'opacity': 0})),
			state('*', style({'transform': 'scale(1)', 'opacity': 1})),
			transition('void => *', animate('.3s 0s ease-in-out'))
		])
	]
})
export class FeaturesSectionComponent implements OnInit {
	features: Feature[];

	constructor(private _featureService: FeatureService, public scrollService: ScrollService) {}

	ngOnInit(): void {
		this._featureService.list().subscribe(val => this.features = val);
	}
}
