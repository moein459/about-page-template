import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { AboutPageComponent } from './components/about-page/about-page.component';

@NgModule({
	declarations: [AboutPageComponent],
	imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
