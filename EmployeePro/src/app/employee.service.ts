import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './CreateEmp';
import { HTTP_OPTIONS } from './header.config';
import { Employee, Employee1 } from './model/employee';
import { Product } from './model/Product'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee:Employee=new Employee();
  constructor(private httpClient: HttpClient) { }

  
  createEmployee(employee: any): Observable<Employee> {
  //   const headers= new HttpHeaders()
  // .set('content-type', 'application/json')
  // .set('Access-Control-Allow-Origin', '*');
    // const empURL_ = "http://localhost:9092/api/v1/employs";
    const empURL_ = "http://localhost:9090/api/login/signup";
    return this.httpClient.post<Employee>(empURL_, employee, HTTP_OPTIONS);
  }


  // Login Employee Service
  loginEmployee(input: string, password: any ): Observable<Login> {
    const empURL_ = `http://localhost:9090/api/login/getLoginDetails/${input}/${password}`;
    return this.httpClient.get<Login>(empURL_,  HTTP_OPTIONS);
  }

  saveEmp(employee: any): Observable<Employee1> {
    const empURL="http://localhost:9090/api/v1/employs/employs";
    return this.httpClient.post<Employee1>(empURL, employee);
  }

  getAllEmp(){
    const empURL_ = "http://localhost:9090/api/v1/employs/employs";
    return this.httpClient.get(empURL_);
  }
  deleteEmployee(id:any){
    const empURL =`http://localhost:9090/api/v1/employs/employs/delete/` + id;
    return this.httpClient.delete(empURL);
  }
  geEmployeeById(id:any){
    const empURL =`http://localhost:9090/api/v1/employs/employs/read/` + id;
    return this.httpClient.get(empURL, id);
  }

  updateEmployee(id: any, empObj: any) {
    const empURL =`http://localhost:9090/api/v1/employs/employs/update/` + id;
    return this.httpClient.put(empURL, empObj);
  }

  logoutEmp(Product:any){
    const empURL="http://localhost:9090/api/login/logoutById";
    return this.httpClient.post(empURL, HTTP_OPTIONS);
  }

  getproductdetails(){
    const empURL_ = "http://localhost:9090/api/v1/product/getproductdetails";
    return this.httpClient.get(empURL_);
  }

  addProductdetails(Product:any):  Observable<Product> {
    const empURL_ = "http://localhost:9090/api/v1/product/addProduct";
    return this.httpClient.post<Product>(empURL_,Product,HTTP_OPTIONS);
  }

  deleteProduct(prodId:any){
    const empURL =`http://localhost:9090/api/v1/product/deleteProduct/delete/` + prodId;
    return this.httpClient.delete(empURL);
  }

  updateProduct(prodId: any) {
  const APIURL_ =`http://localhost:9090/api/v1/product/update/` + prodId;
  return this.httpClient.put(APIURL_, prodId);
  }
}
