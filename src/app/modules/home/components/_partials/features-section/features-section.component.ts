import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Feature } from '../../../models/feature.model';
import { FeatureService } from '../../../services/feature/feature.service';

@Component({
	selector: "app-features-section",
	templateUrl: "./features-section.component.html",
	styles: []
})
export class FeaturesSectionComponent implements OnInit {
	features: Observable<Feature[]>;

	constructor(private _featureService: FeatureService) {}

	ngOnInit(): void {
		this.features = this._featureService.list();
	}
}
