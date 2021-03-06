import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeModule } from "./modules/home/home.module";
import { CoreModule } from "./modules/core/core.module";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [AppComponent],
	imports: [CoreModule, HttpClientModule, BrowserModule, BrowserAnimationsModule, AppRoutingModule, HomeModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
