import { MessageService } from './message.service';
import { HEROES } from './heroes/mock-heroes';
import { Hero } from './heroes/hero';
import { Injectable } from '@angular/core';

import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
