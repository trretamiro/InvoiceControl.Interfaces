import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ListInvoiceComponent } from './pages/list-invoice/list-invoice.component';



const routes: Routes = [
  {
    path: '',
    component: ListInvoiceComponent,
    title: 'Invoice Control'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InvoiceRoutingModule {}
