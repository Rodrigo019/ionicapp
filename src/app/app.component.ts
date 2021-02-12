import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Filmes', url: '/filmes', icon: 'cube' },
    { title: 'Séries', url: '/series', icon: 'cube' }
  ];
  constructor() {}
}
