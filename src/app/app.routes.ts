import { Routes } from '@angular/router';
import { HomeComponent } from './library/home/home.component';
// import { AboutUsComponent } from './library/about-us/about-us.component';


export const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'about-us', loadChildren:()=>import('./library/about-us/about.route').then(m=>m.ROUTES)},
  // {path: 'aboutUs', component:AboutUsComponent},
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
];

