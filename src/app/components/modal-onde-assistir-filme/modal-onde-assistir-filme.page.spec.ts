import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalOndeAssistirFilmePage } from './modal-onde-assistir-filme.page';

describe('ModalOndeAssistirFilmePage', () => {
  let component: ModalOndeAssistirFilmePage;
  let fixture: ComponentFixture<ModalOndeAssistirFilmePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOndeAssistirFilmePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalOndeAssistirFilmePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
