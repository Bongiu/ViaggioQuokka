import { Component, inject, output } from '@angular/core';
import { BottoneComponent } from "../bottone/bottone.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UrlServices } from '../../core/services/url.service';
import { UrlEnum } from '../../core/interfaces/interfaces';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BottoneComponent, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 urlPath = '';
 prendiUrl = inject(UrlServices);
 urlRicevuta : string | null= '';
destination='';
 urlEnum = UrlEnum; //importr enum

 searchValue = output<string>();

constructor(){}

setValue(){
  this.searchValue.emit(this.destination);
}

 ngOnInit(){
  this.prendiUrl.pagUrl$.subscribe(url=>{
    this.urlRicevuta = url;
    console.log('url da navbar', url)
  })
 }

}
