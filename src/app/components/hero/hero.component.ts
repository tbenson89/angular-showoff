import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent implements OnInit {
  @Input() title = {};
  @Input() tagline: string = '';
  @Input() summary: string = '';
  @Input() btn1txt: string = '';
  @Input() btn1link: string = '';
  @Input() btn2txt: string = '';
  @Input() btn2link: string = '';

  constructor() { }

  ngOnInit(): void { }

}
