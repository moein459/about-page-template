import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Feature } from "../../models/feature.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
	providedIn: "root"
})
export class FeatureService {
	constructor(private http: HttpClient) {}

	list(): Observable<Feature[]> {
		return this.http.get<Feature[]>('./data.json').pipe(map(val => val['features']));
	}
}
