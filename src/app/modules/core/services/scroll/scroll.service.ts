import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class ScrollService {
	private _onScroll: BehaviorSubject<ScrollPosition>;
	onScroll$: Observable<ScrollPosition>;

	constructor() {
		this._onScroll = new BehaviorSubject({
			x: window.scrollX,
			y: window.scrollY
		});
		this.onScroll$ = this._onScroll.asObservable();
		window.onscroll = () =>
			this._onScroll.next({ x: window.scrollX, y: window.scrollY });
	}
}

export interface ScrollPosition {
	x: number;
	y: number;
}
