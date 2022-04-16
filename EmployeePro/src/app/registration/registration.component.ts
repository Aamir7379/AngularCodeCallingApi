import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee, Employee1 } from '../model/employee';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  emplyeeForm: any;
  submitted = false;
  employee: any;
  // employee:Employee1=new Employee1();
  

  constructor(private formBuilder: FormBuilder, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.emplyeeForm = this.formBuilder.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      emailId: ['',[Validators.required]]
    })
  }

  get signUp() {
    return this.emplyeeForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if(!this.emplyeeForm.valid) {
      return;
    } else {
      console.log(this.emplyeeForm.value);
      this.employeeService.saveEmp(this.emplyeeForm.value).subscribe(data => {
        console.log('employeeForm : ' , data);
        this.employee = data;
        console.log(this.employee);
        this.router.navigate(['/details']);
        // console.log(this.employee.message);
        
                                
      // if(this.employee.message=='User Already Exist'){
      //   console.log("i am in if ")
      // } 
      // else{
      //   this.router.navigate(['/login']);
      // } 
       
      })
    } 
  }
  
}
