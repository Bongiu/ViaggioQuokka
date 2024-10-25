import { Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { HomeComponent } from './library/home/home.component';
import { BottoneComponent } from './library/bottone/bottone.component';
import { NavbarComponent } from './library/navbar/navbar.component';
import { SocialComponent } from './library/social/social.component';
import { ApiService } from './core/services/api.service';
import { Beach, City, Country, KeywordEnum, RespDestinationI, Temple } from './core/interfaces/interfaces';
import { CardComponent } from './library/card/card.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    BottoneComponent,
    RouterLink,
    RouterLinkActive,
    NavbarComponent,
    SocialComponent,
    CardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'viaggioQuokka';
  servChiamate = inject(ApiService);
  displayCard: boolean = false;
  oggettoContenuto : RespDestinationI | []= [];
  oggCountries : Country = {name:'', id: 0, cities:[]};
  oggCity : City = {name:'', description:'', imageUrl:''};
  oggTemple : Temple = {id: 0,name:'', description:'', imageUrl:''};
  oggBeach : Beach | []= [];
  provaArray: [] = [];
  oggeogg = {};
  constructor(public route: ActivatedRoute) {}

  riceviDatiDettaglio(f: string) {
    console.log(f);
  }

  getKeywordViaggio(keyword: string) {
    if (
      keyword &&
      (keyword === KeywordEnum.COUNTRIES ||
        keyword === KeywordEnum.TEMPLES ||
        keyword === KeywordEnum.BEACHES)
    ) {
      this.servChiamate.getAll(keyword).subscribe((res) => {
        console.log(res);
        if (res) {
          // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          this.displayCard = true;
          // this.oggettoContenuto=res;
          // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

          if( keyword === KeywordEnum.COUNTRIES){
            for(const item of res){
              console.log('prova - countries');
              this.oggCountries = item;
              console.log(this.oggCountries);
              
              if(this.oggCountries.cities){
                for(const v of item.cities){
                  this.oggCity = v;
                  console.log(this.oggCity);
                }
              }
            }
          }else if(keyword === KeywordEnum.TEMPLES){
            for(const ite of res) {
              // console.log('prova - temples');
              this.oggTemple = ite;
              console.log(this.oggTemple);
            }
          }else if (keyword === KeywordEnum.BEACHES){
            for(const x of res){
              // console.log('prova - beaches');
            this.oggBeach = x;
            console.log(this.oggBeach);
            }
          }
          // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

      //  TODO: if -> per vedere che response arriva
      // valorizzare l'oggetto in base alla risposta
  //     - coutries
  //     - temples
  //     - beaches
          // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
          // for(const [key, value] of Object.entries(res)){
          //   console.log('for of',value);
          // }
        }
      });
    } else {
      alert('inserire una keyword valida tra countries-temples-beaches');
    }
  }

  // - tirare fuori elemnti delle oggetti
  // - verificare che i dati siano corretti (log)
  // - prelevare elementi e inserirli nella Card
  // - mostrare la card in home
}

// getKeywordViaggio(keyword:string){
//   debugger;
//   if( !keyword ||
//   keyword != KeywordEnum.COUNTRIES &&
//     keyword != KeywordEnum.TEMPLES &&
//     keyword != KeywordEnum.BEACHES){

//       alert('inserire una keyword valida tra countries-temples-beaches');
//   }
//   this.servChiamate.getAll(keyword).subscribe((res)=>{
//     console.log(res);
//   })
// }
