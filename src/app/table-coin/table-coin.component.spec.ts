import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCoinComponent } from './table-coin.component';

describe('TableCoinComponent', () => {
  let component: TableCoinComponent;
  let fixture: ComponentFixture<TableCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
