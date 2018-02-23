import { Routes } from '@angular/router';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { LandingComponent } from './landing';
import { LoginComponent } from './login';

export const ROUTES: Routes = [
  { path: '',      component: LandingComponent },
  { path: 'landing',  component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
