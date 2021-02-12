import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SerieListagemPage } from './serie-listagem.page';

describe('SerieListagemPage', () => {
  let component: SerieListagemPage;
  let fixture: ComponentFixture<SerieListagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieListagemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SerieListagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
