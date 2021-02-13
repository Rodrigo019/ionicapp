import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalFiltroFilmePage } from './modal-filtro-filme.page';

describe('ModalFiltroFilmePage', () => {
  let component: ModalFiltroFilmePage;
  let fixture: ComponentFixture<ModalFiltroFilmePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFiltroFilmePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalFiltroFilmePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
