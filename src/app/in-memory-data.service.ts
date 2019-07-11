import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice',age:26 },
      { id: 12, name: 'Narco',age:26 },
      { id: 13, name: 'Bombasto',age:26 },
      { id: 14, name: 'Celeritas' ,age:26},
      { id: 15, name: 'Magneta',age:26 },
      { id: 16, name: 'RubberMan' ,age:26},
      { id: 17, name: 'Dynama' ,age:26},
      { id: 18, name: 'Dr IQ' ,age:26},
      { id: 19, name: 'Magma',age:26 },
      { id: 20, name: 'Tornado' ,age:26}
    ];
    return { heroes };
  }

  constructor() { }

  genId(heroes:Hero[]):number  {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
