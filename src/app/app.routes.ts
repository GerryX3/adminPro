import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './access/login/login.component';
import {NopagefoundComponent} from './shared/nopagefound/nopagefound.component';
import {PagesComponent} from './pages/pages.component';
import {PAGES_ROUTES} from './pages/pages.routes';

const appRoutes: Routes = [
	{path: '**', component: NopagefoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
