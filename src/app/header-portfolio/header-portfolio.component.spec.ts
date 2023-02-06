import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPortfolioComponent } from './header-portfolio.component';

describe('HeaderPortfolioComponent', () => {
  let component: HeaderPortfolioComponent;
  let fixture: ComponentFixture<HeaderPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
