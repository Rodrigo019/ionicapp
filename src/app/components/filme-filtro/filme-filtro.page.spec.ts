import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmeFiltroPage } from './filme-filtro.page';

describe('FilmeFiltroPage', () => {
  let component: FilmeFiltroPage;
  let fixture: ComponentFixture<FilmeFiltroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeFiltroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmeFiltroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
