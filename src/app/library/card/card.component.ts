import { Component } from '@angular/core';
import { BottoneComponent } from "../bottone/bottone.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [BottoneComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
book = '';
nuovoOut ='nuova quokka'

riceviDatiDettaglio(f:string){
//  debugger;
  // alert('perchè questo non quokka');
  
  console.log('quokka output ricevuto',f);
  }

 

}
