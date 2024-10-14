import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SelezionaImmagineService } from '../../core/services/seleziona-immagine.service';
import { BottoneComponent } from "../bottone/bottone.component";
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, BottoneComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // imgService = inject(SelezionaImmagineService);
 

constructor(){}



}
