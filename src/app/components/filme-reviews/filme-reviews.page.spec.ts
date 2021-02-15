import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmeReviewsPage } from './filme-reviews.page';

describe('FilmeReviewsPage', () => {
  let component: FilmeReviewsPage;
  let fixture: ComponentFixture<FilmeReviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeReviewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmeReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
