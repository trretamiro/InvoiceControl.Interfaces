import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListInvoiceComponent } from './modules/Invoice/pages/list-invoice/list-invoice.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'invoice',
    loadChildren: () =>
      import('./modules/Invoice/invoice.module').then((m) => m.InvoiceModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
