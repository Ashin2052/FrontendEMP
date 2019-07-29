import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.css']
})
export class HeroInfoComponent implements OnInit {

  hero: Hero;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  @Input() set Hero(value) {
    if(value) {
      this.hero = value;
      console.log('Hero', this.hero);
    }

  }

}
