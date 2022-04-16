import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EditComponent } from './edit/edit.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EventsComponent } from './events/events.component';
import { LoginEmployeeComponent } from './login-employee/login-employee.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductDetailsComponent } from './productDetails/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'registration'
  },
  {
    path:'update',
    component: RegistrationComponent
  },
  {
    path: 'registration',
    component: CreateEmployeeComponent
  },
  {
    path: 'details',
    component: EmployeeDetailsComponent
  },
  {
    path: 'login',
    component: LoginEmployeeComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  } ,{
    path: 'productDetails',
    component: ProductDetailsComponent
  },  {
    path: 'add-product',
    component: AddProductComponent
  },
  // { path: 'delete/:id' , component: DeleteEmployeeComponent }






  { path: 'update-product/:id', component: UpdateProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  

 }
