import {RouterModule, Routes} from '@angular/router';
import {AccessComponent} from './access.component';
import {LoginComponent} from './login/login.component';
import {SingInComponent} from './sing-in/sing-in.component';


const accessRoutes: Routes = [
	{
		path: '',
		component: AccessComponent,
		children: [
			{path: 'login', component: LoginComponent},
			{path: 'register', component: SingInComponent}
		]
	}
];

export const ACCESS_ROUTES = RouterModule.forChild(accessRoutes);

