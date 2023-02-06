import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPortfolioComponent } from './body-portfolio.component';

describe('BodyPortfolioComponent', () => {
  let component: BodyPortfolioComponent;
  let fixture: ComponentFixture<BodyPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
