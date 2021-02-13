import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmeDetalhePage } from './filme-detalhe.page';

describe('FilmeDetalhePage', () => {
  let component: FilmeDetalhePage;
  let fixture: ComponentFixture<FilmeDetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeDetalhePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmeDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
