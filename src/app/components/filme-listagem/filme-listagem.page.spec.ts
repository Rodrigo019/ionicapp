import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmeListagemPage } from './filme-listagem.page';

describe('FilmeListagemPage', () => {
  let component: FilmeListagemPage;
  let fixture: ComponentFixture<FilmeListagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeListagemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmeListagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
