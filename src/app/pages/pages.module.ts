import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PAGES_ROUTES} from './pages.routes';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {PagesComponent} from './pages.component';
import {NopagefoundComponent} from '../shared/nopagefound/nopagefound.component';
import {HeaderComponent} from '../shared/header/header.component';
import {SidebarComponent} from '../shared/sidebar/sidebar.component';
import {BreadcrumbsComponent} from '../shared/breadcrumbs/breadcrumbs.component';


@NgModule({
	declarations: [
		PagesComponent,
		DashboardComponent,
		ProgressComponent,
		Graficas1Component,
		NopagefoundComponent,
		HeaderComponent,
		SidebarComponent,
		BreadcrumbsComponent
	],
	imports: [
		CommonModule,
		PAGES_ROUTES
	]
})
export class PagesModule {
}
