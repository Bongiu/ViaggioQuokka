import { Component } from '@angular/core';
import { BottoneComponent } from "../bottone/bottone.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BottoneComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

testoInput = 'Search';

}
