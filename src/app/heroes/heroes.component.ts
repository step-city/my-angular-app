import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {

  heroes:Hero[]; //声明


  // 向构造函数添加heroService类型的私有参数HeroService。
  constructor(private heroService:HeroService) { 

  }

  //wiring constructor parameters to properties.The constructor shouldn't do anything
  ngOnInit() {
    this.getHeroes();
  }


  getHeroes():void {
    this.heroService.getHeroes().subscribe(heroes =>{
      this.heroes = heroes;
    });
  }

  add(name:string):void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({name} as Hero)
      .subscribe(hero =>{
        this.heroes.push(hero)
      })
  }

  delete(hero:Hero):void {
    this.heroes = this.heroes.filter(h => h !==hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
