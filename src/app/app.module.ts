import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Rutas
import {APP_ROUTES} from './app.routes';


import {AppComponent} from './app.component';
import {PagesModule} from './pages/pages.module';
import {AccessModule} from './access/access.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		PagesModule,
		AccessModule,
		APP_ROUTES
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
