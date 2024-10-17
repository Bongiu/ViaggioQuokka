import { Component, inject } from '@angular/core';
import { BottoneComponent } from "../bottone/bottone.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SelezionaImmagineService } from '../../core/services/seleziona-immagine.service';
import { UrlEnum } from '../../core/interfaces/interfaces';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BottoneComponent, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 urlPath = '';
 prendiUrl = inject(SelezionaImmagineService);
 urlRicevuta : string | null= '';

 urlEnum = UrlEnum; //importr enum

constructor(){}


 ngOnInit(){
  this.prendiUrl.pagUrl$.subscribe(url=>{
    this.urlRicevuta = url;
    console.log('url da navbar', url)
  })
 }

}
