import { Component, input} from '@angular/core';

@Component({
  selector: 'app-bottone',
  standalone: true,
  imports: [],
  templateUrl: './bottone.component.html',
  styleUrl: './bottone.component.scss'
})
export class BottoneComponent {
testoBottone = input.required<string>();



}
