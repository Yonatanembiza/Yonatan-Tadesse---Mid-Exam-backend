import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalNumberSalesComponent } from './total-number-sales.component';

describe('TotalNumberSalesComponent', () => {
  let component: TotalNumberSalesComponent;
  let fixture: ComponentFixture<TotalNumberSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalNumberSalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalNumberSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
