import { Component } from '@angular/core';
import { BottoneComponent } from "../bottone/bottone.component";
import { RouterLink, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BottoneComponent, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {




}
