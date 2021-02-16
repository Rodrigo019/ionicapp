import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmeElencoPrincipalPage } from './filme-elenco-principal.page';

describe('FilmeElencoPrincipalPage', () => {
  let component: FilmeElencoPrincipalPage;
  let fixture: ComponentFixture<FilmeElencoPrincipalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeElencoPrincipalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmeElencoPrincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
