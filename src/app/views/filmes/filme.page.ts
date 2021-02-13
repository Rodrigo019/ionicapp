import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.page.html',
  styleUrls: ['./filme.page.scss'],
})
export class FilmePage implements OnInit {

  @Input() NomeDoFilme: string;

  constructor() { }

  ngOnInit() {
  }

}
