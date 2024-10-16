import { Component } from '@angular/core';
import { BottoneComponent } from "../bottone/bottone.component";
import { CardComponent } from '../card/card.component';
import { SocialComponent } from '../social/social.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ BottoneComponent, CardComponent,SocialComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent { 

constructor(){}



}
