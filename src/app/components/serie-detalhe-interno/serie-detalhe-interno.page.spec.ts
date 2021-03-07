import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SerieDetalheInternoPage } from './serie-detalhe-interno.page';

describe('SerieDetalheInternoPage', () => {
  let component: SerieDetalheInternoPage;
  let fixture: ComponentFixture<SerieDetalheInternoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieDetalheInternoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SerieDetalheInternoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
