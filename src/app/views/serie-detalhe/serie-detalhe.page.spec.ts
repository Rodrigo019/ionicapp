import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SerieDetalhePage } from './serie-detalhe.page';

describe('SerieDetalhePage', () => {
  let component: SerieDetalhePage;
  let fixture: ComponentFixture<SerieDetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieDetalhePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SerieDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
