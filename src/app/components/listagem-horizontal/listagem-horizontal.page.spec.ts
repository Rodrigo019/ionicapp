import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListagemHorizontalPage } from './listagem-horizontal.page';

describe('ListagemHorizontalPage', () => {
  let component: ListagemHorizontalPage;
  let fixture: ComponentFixture<ListagemHorizontalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemHorizontalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListagemHorizontalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
