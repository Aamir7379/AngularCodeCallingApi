import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm: any;
  submitted = false;
  product: any;

  constructor(private formBuilder: FormBuilder, private router: Router,
     private employeeService: EmployeeService) { }


  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      prodName: ['',[Validators.required]],
      pordPrice: ['',[Validators.required]],
      adminId: ['',[Validators.required]]
    })
  }
  onSubmit() {
alert('');
if(!this.productForm.valid) {
  return;
} else {
  //this.submitted = true;
  console.log(this.productForm.value);

  this.employeeService.addProductdetails(this.productForm.value).subscribe(data => {
    console.log('employeeForm : ' , data);
    this.product = data;
    console.log(this.product);
    this.router.navigate(['/productDetails']);
      
  })
}

  }
}
