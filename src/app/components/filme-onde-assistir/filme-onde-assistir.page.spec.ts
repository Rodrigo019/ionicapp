import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmeOndeAssistirPage } from './filme-onde-assistir.page';

describe('FilmeOndeAssistirPage', () => {
  let component: FilmeOndeAssistirPage;
  let fixture: ComponentFixture<FilmeOndeAssistirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeOndeAssistirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmeOndeAssistirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
