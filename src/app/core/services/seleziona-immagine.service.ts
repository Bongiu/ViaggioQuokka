
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelezionaImmagineService {

  pagUrl$ = new BehaviorSubject<string | null>(null);



  constructor(private route: Router) {
    this.route.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event:NavigationEnd)=>{
      this.pagUrl$.next(event.url);
    })
   }


}
