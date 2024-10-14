import { Component, input, output} from '@angular/core';

@Component({
  selector: 'app-bottone',
  standalone: true,
  imports: [],
  templateUrl: './bottone.component.html',
  styleUrl: './bottone.component.scss'
})
export class BottoneComponent {

  label = input<string>();

  // outputDettaglio = output<string>();


  // setDatiDettaglio(datiDettaglioCard:string){
 
  //   this.outputDettaglio.emit(datiDettaglioCard);
  // }
  



}
