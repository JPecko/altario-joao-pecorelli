import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneratorComponent } from './generator/generator.component';
import { PaymentsComponent } from './payments/payments.component';

const routes: Routes = [
  {
    path: 'generator',
    component: GeneratorComponent
  },
  {
    path: 'payments',
    component: PaymentsComponent
  },
  {
    path: '', redirectTo: 'generator'
  },
  {
    path: '**', redirectTo: 'generator'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewPagesRoutingModule { }