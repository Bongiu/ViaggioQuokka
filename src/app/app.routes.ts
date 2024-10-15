import { Routes } from '@angular/router';
import { HomeComponent } from './library/home/home.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'aboutUs', loadChildren:()=>import('./library/about-us/about.routes').then(m=>m.ROUTES)},
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
];

