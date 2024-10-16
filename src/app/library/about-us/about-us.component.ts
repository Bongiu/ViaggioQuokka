import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CardComponent, RouterLink, RouterLinkActive],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

 
}
