import { Component } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent {
  photoCover: string = '';

  cardTitle: string = '';

  cardDescription: string = '';

  id: string = '';

  constructor() {
    const [article] = dataFake;
    this.photoCover = article.photo;
    this.cardTitle = article.title;
    this.cardDescription = article.description;
    this.id = article.id.toString();
  }
}
