import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./library/home/home.component";
import { BottoneComponent } from './library/bottone/bottone.component';
import { NavbarComponent } from './library/navbar/navbar.component';
import { SocialComponent } from './library/social/social.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, BottoneComponent, RouterLink, RouterLinkActive, NavbarComponent,SocialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'viaggioQuokka';

  constructor(public route : ActivatedRoute){}

  riceviDatiDettaglio(f:string){
    console.log(f)
    }
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//  ngOnInit(){
//   console.log('APP',this.route.snapshot); // ActivatedRouteSnapshot
//   console.log('APP',this.route.url);
//  }
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    
}
