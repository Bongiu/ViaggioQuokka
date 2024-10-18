import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./library/home/home.component";
import { BottoneComponent } from './library/bottone/bottone.component';
import { NavbarComponent } from './library/navbar/navbar.component';
import { SocialComponent } from './library/social/social.component';
import { ApiService } from './core/services/api.service';
import { KeywordEnum } from './core/interfaces/interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, BottoneComponent, RouterLink, RouterLinkActive, NavbarComponent,SocialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'viaggioQuokka';
  servChiamate = inject(ApiService);
  displayCard:boolean= false;

  constructor(public route : ActivatedRoute){  }

  riceviDatiDettaglio(f:string){
    console.log(f)
    }

    getKeywordViaggio(keyword:string){    
      if( (keyword) && 
      (keyword === KeywordEnum.COUNTRIES || 
        keyword === KeywordEnum.TEMPLES || 
        keyword === KeywordEnum.BEACHES)){

        this.servChiamate.getAll(keyword).subscribe((res)=>{
          console.log(res);
          if(res){
            this.displayCard=true;
          }
        })
      }else{
        alert('inserire una keyword valida tra countries-temples-beaches');
      }
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
}
