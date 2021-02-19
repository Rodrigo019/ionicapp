import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SerieNoArPage } from './serie-no-ar.page';

describe('SerieNoArPage', () => {
  let component: SerieNoArPage;
  let fixture: ComponentFixture<SerieNoArPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieNoArPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SerieNoArPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
