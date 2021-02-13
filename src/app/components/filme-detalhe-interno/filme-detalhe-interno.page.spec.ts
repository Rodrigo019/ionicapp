import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmeDetalheInternoPage } from './filme-detalhe-interno.page';

describe('FilmeDetalheInternoPage', () => {
  let component: FilmeDetalheInternoPage;
  let fixture: ComponentFixture<FilmeDetalheInternoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeDetalheInternoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmeDetalheInternoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
