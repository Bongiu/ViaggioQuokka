import { Component, inject, } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UrlServices } from '../../core/services/url.service';
import { BadgeComponent } from "../badge/badge.component";
import { BottoneComponent } from '../bottone/bottone.component';
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CardComponent, RouterLink, RouterLinkActive, BadgeComponent, BadgeComponent, BottoneComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  // pageUrl = window.location.href;

  inviaUrl = inject(UrlServices);
  currentUrl :string | null= '';

  ngOnInit() {
    // console.log(this.pageUrl);

    this.inviaUrl.pagUrl$.subscribe(url=>{
      this.currentUrl = url;
      console.log(`Current url ${url}`);
    })
  }

  
}
