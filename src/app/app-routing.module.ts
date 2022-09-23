import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderComponent } from './order/order.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '',redirectTo: '/home', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  {path: 'order-detail/:id', component: OrderDetailComponent},
  {path: 'table', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }