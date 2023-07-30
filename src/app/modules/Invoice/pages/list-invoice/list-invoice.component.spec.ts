import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInvoiceComponent } from './list-invoice.component';

describe('ListInvoiceComponent', () => {
  let component: ListInvoiceComponent;
  let fixture: ComponentFixture<ListInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListInvoiceComponent]
    });
    fixture = TestBed.createComponent(ListInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
