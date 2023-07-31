import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListInvoiceComponent } from './pages/list-invoice/list-invoice.component';
import { SharedModule } from '../shared/shared.module';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { CreateInvoiceComponent } from './pages/create-invoice/create-invoice.component';
import { AlterInvoiceComponent } from './pages/alter-invoice/alter-invoice.component';



@NgModule({
  declarations: [
    ListInvoiceComponent,
    CreateInvoiceComponent,
    AlterInvoiceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InvoiceRoutingModule,
  ]
})
export class InvoiceModule { }
