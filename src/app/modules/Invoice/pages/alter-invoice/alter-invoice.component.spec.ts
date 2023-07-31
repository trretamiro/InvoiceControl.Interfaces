import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterInvoiceComponent } from './alter-invoice.component';

describe('AlterInvoiceComponent', () => {
  let component: AlterInvoiceComponent;
  let fixture: ComponentFixture<AlterInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlterInvoiceComponent]
    });
    fixture = TestBed.createComponent(AlterInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
