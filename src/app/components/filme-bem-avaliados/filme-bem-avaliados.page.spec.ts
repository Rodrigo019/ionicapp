import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmeBemAvaliadosPage } from './filme-bem-avaliados.page';

describe('FilmeBemAvaliadosPage', () => {
  let component: FilmeBemAvaliadosPage;
  let fixture: ComponentFixture<FilmeBemAvaliadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeBemAvaliadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmeBemAvaliadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
