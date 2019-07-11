import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.less']
})
export class HeroSearchComponent implements OnInit {

  heroes$:Observable<Hero[]>;

  private searchTerms = new Subject<string>();

  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      //  确保仅在过滤器文本更改时才发送请求。
      distinctUntilChanged(),
      switchMap((term:string) =>this.heroService.searchHeroes(term))
    )
  }

  // Push a search term into the observable stream.
  search(term: string):void {
    this.searchTerms.next(term);
  }
}
