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
  riceviDatiDettaglio(f:string){
    console.log(f)
    }

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
      console.log(this.route); ActivatedRoute
      this.route.url.subscribe((event) => {
        console.log(event[0]); // It's an array remember [0]
        console.log(event[0]?.path); // e.g. /products
        console.log(event[0]?.parameters); // e.g. { id: 'x8klP0' }
      });
      console.log(this.route.snapshot); // ActivatedRouteSnapshot
      console.log(this.route.snapshot.url); // UrlSegment[]
      console.log(this.route.snapshot.url[0]); // UrlSegment
      console.log(this.route.snapshot.url[0]?.path);
    }
    
}
