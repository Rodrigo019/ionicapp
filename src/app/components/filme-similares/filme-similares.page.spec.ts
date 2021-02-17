import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmeSimilaresPage } from './filme-similares.page';

describe('FilmeSimilaresPage', () => {
  let component: FilmeSimilaresPage;
  let fixture: ComponentFixture<FilmeSimilaresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeSimilaresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmeSimilaresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
