import { NgModule, APP_INITIALIZER } from '@angular/core';

interface PreloadedAsset {
	url: string;
	type: 'image' | 'other';
}

export const preloadedAssets: PreloadedAsset[] = 
	[
		{url: './assets/img/BG.jpg', type: 'image'},
		{url: './assets/img/00.jpg', type: 'image'},
		{url: './assets/img/amniat.png', type: 'image'},
		{url: './assets/img/bg-fake-mask.svg', type: 'image'},
		{url: './assets/img/call.png', type: 'image'},
		{url: './assets/img/certificate.png', type: 'image'},
		{url: './assets/img/dastresi.png', type: 'image'},
		{url: './assets/img/keyfiat.png', type: 'image'},
		{url: './assets/img/Logo.png', type: 'image'},
		{url: './assets/img/poshtibani.png', type: 'image'},
		{url: './assets/img/sor\'at.png', type: 'image'},
		{url: './assets/img/uptime.png', type: 'image'},
	];

export const preloadImages = () => {
	const preloadArr = [];
	preloadedAssets.filter(p => p.type == 'image').forEach(p => {
		preloadArr.push(new Promise((resolve, reject) => {
			let image = new Image();
			image.onload = resolve;
			image.onerror = reject;
			image.src = p.url;
		}));
	})

	return Promise.all(preloadArr);
};

@NgModule({
	providers: [
		{ provide: APP_INITIALIZER, multi: true, useValue: preloadImages }
	],
})
export class CoreModule { }
