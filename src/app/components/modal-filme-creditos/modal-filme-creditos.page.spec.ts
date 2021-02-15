import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalFilmeCreditosPage } from './modal-filme-creditos.page';

describe('ModalFilmeCreditosPage', () => {
  let component: ModalFilmeCreditosPage;
  let fixture: ComponentFixture<ModalFilmeCreditosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFilmeCreditosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalFilmeCreditosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
