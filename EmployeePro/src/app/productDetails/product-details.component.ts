import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails: any=[];
  constructor(private employeeService: EmployeeService, private router: Router) {

  }

  ngOnInit(): void {
    this.employeeService.getproductdetails().subscribe(data =>{
      this.productDetails= data;

      console.log("GetAllEmployee:"+data)
    })
  }
  removeEmployee(productDetails: any, index: any) {
    console.log('data : ' , productDetails);
    this.employeeService.deleteProduct(productDetails.prodId).subscribe(data => {
      console.log('data : ' , data);
      let index = this.productDetails[productDetails];
      this.productDetails.splice(index, 1);
      // this.AllEmployees();
      alert('Deleted!');
      this.router.navigate(['/productDetails']);
    })
  }
}
