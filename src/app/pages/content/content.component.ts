import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';

  private id: string | null = '0';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));

    this.setValuesToComponent();
  }

  setValuesToComponent() {
    const result = dataFake.find(
      (article) => article.id.toString() === this.id
    );

    if (!result) {
      this.router.navigate(['']);
      return;
    }

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photo;
  }
}
