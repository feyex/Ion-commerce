import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NocontentComponent } from './ui/nocontent/nocontent';
import { ErrorComponent } from './ui/error/error';
import { PhoneauthComponent } from './authentication/phoneauth/phoneauth';
import { ProfileInfoComponent } from './authentication/profile-info/profile-info';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './authentication/login/login';
import { SignupComponent } from './authentication/signup/signup'

export const component = [
	NocontentComponent, ErrorComponent,
	PhoneauthComponent, LoginComponent,
	ProfileInfoComponent, SignupComponent
]

@NgModule({
	declarations: component,
	imports: [
		FormsModule,
		ReactiveFormsModule,
		IonicModule
	],
	exports: component
})
export class ComponentsModule {}
