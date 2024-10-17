import { Component, inject, } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SelezionaImmagineService } from '../../core/services/seleziona-immagine.service';
import { BadgeComponent } from "../badge/badge.component";
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CardComponent, RouterLink, RouterLinkActive, BadgeComponent, BadgeComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  pageUrl = window.location.href;

  inviaUrl = inject(SelezionaImmagineService);
  currentUrl :string | null= '';

  ngOnInit() {
    console.log(this.pageUrl);
    this.inviaUrl.pagUrl$.subscribe(url=>{
      this.currentUrl = url;
      console.log(`Current url ${url}`);
    })
  }

  
}
