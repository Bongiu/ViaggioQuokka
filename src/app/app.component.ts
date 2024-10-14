import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./library/home/home.component";
import { BottoneComponent } from './library/bottone/bottone.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, BottoneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'viaggioQuokka';
  riceviDatiDettaglio(f:string){
    console.log(f)
    }
    
}
