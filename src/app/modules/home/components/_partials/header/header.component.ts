import { Component, OnInit } from "@angular/core";
import { ScrollService } from 'src/app/modules/core/services/scroll/scroll.service';
import {Observable, pipe } from 'rxjs';
import { pairwise, filter, map, distinctUntilChanged } from "rxjs/operators";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styles: []
})
export class HeaderComponent implements OnInit {
	scrolledDown: Observable<boolean>;
	constructor(public scrollService: ScrollService) {}

	ngOnInit(): void {
		const scrollDownAmount = 75;
		this.scrolledDown = this.scrollService.onScroll$.pipe(map((scroll) => scroll.y > scrollDownAmount), distinctUntilChanged());
	}
}
