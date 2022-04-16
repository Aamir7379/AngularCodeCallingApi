import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginEmployeeComponent } from './login-employee/login-employee.component';
import { EventsComponent } from './events/events.component';
import { EditComponent } from './edit/edit.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductDetailsComponent } from './productDetails/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    LoginEmployeeComponent,
    EventsComponent,
    EditComponent,
    DeleteEmployeeComponent,
    RegistrationComponent,
    ProductDetailsComponent,
    AddProductComponent,
    UpdateProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
