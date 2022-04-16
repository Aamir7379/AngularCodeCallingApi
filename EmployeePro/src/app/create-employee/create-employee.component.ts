import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  emplyeeForm: any;
  submitted = false;
  employee:Employee=new Employee();
  message:any;
  constructor(private formBuilder: FormBuilder, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.emplyeeForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]],
      emailId: ['', [Validators.required]]
    })
  }


// Getter to access from control
get signUp() {
  return this.emplyeeForm.controls;
}

  onSubmit() {
    this.submitted = true;
    if(!this.emplyeeForm.valid) {
      return;
    } else {
      console.log(this.employee);
      this.employeeService.createEmployee(this.employee).subscribe(data => {
        console.log('employeeForm : ' , data);
        this.employee=data;
        console.log(this.employee);
        console.log(this.employee.message);
        
                                
      if(this.employee.message=='User Already Exist'){
        console.log("i am in if ")
      } 
      else{
        this.router.navigate(['/login']);
      } 
       
      })
    }
    
  }
}
