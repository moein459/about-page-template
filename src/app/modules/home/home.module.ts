import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { AboutPageComponent } from './components/about-page/about-page.component';
import { FeaturesSectionComponent } from './components/_partials/features-section/features-section.component';
import { FeatureItemComponent } from './components/_partials/feature-item/feature-item.component';
import { IntroSectionComponent } from './components/_partials/intro-section/intro-section.component';
import { FooterSectionComponent } from './components/_partials/footer-section/footer-section.component';
import { HeaderComponent } from './components/_partials/header/header.component';
import { InViewportModule } from '@thisissoon/angular-inviewport';

@NgModule({
	declarations: [AboutPageComponent, FeaturesSectionComponent, FeatureItemComponent, IntroSectionComponent, FooterSectionComponent, HeaderComponent],
	imports: [CommonModule, HomeRoutingModule, InViewportModule]
})
export class HomeModule {}
