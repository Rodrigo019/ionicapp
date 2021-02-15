import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmeCreditosPage } from './filme-creditos.page';

describe('FilmeCreditosPage', () => {
  let component: FilmeCreditosPage;
  let fixture: ComponentFixture<FilmeCreditosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeCreditosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmeCreditosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
