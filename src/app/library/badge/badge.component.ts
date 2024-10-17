import { Component, input } from '@angular/core';
import { BottoneComponent } from "../bottone/bottone.component";

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [BottoneComponent],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  nomeUser = input<string>();
  workUser = input<string>();

}
