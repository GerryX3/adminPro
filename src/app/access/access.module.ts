import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { AccessComponent } from './access.component';
import { ACCESS_ROUTES } from './access.routes';

@NgModule({
	declarations: [AccessComponent, LoginComponent, SingInComponent],
	imports: [CommonModule, ACCESS_ROUTES],
})
export class AccessModule {}
