import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  panelOpenState = false;
  number: any;
  flag: any = false;
  constructor() { }

  ngOnInit() {
    this.number = [{ 'n1': 489, 'n2': 500, 'n3': 600, 'n4': 700 },
    { 'n1': 469, 'n2': 540, 'n3': 230, 'n4': 950 },
    { 'n1': 469, 'n2': 570, 'n3': 604, 'n4': 706 },
    { 'n1': 497, 'n2': 650, 'n3': 360, 'n4': 970 }];
  }
  toggle(status) {
    if (status === 'opened') {
      this.flag = true;
    } else {
      this.flag = false;
    }
  }
}
