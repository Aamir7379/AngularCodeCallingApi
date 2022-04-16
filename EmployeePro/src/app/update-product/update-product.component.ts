import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  employeeId = 0;
  editProduct: any;
  editEmp: any;
  constructor(private formBuilder: FormBuilder,
              private productService: EmployeeService) { }

  ngOnInit(): void {
    this.editProduct = this.formBuilder.group({
      prodName: ['', Validators.required],
      pordPrice: ['', Validators.required],
      adminId: ['', Validators.required]
    })
  }
  onSubmit() {
    console.log('dfghjkl;');
    
    this.productService.updateProduct(this.editProduct).subscribe(data => {
      console.log('product : ' , data);
      
    })
  }
}
