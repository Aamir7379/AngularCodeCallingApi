import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-login-employee',
  templateUrl: './login-employee.component.html',
  styleUrls: ['./login-employee.component.css']
})
export class LoginEmployeeComponent implements OnInit {

  LoginForm: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      emailId: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    let usename = this.LoginForm.get('emailId').value;
    let passeord = this.LoginForm.get('password').value;
    //alert(usename + '' + passeord);
    this.employeeService.loginEmployee(usename, passeord).subscribe((data: any) => {
      console.log('value : ', data);
      console.log('Employee Login Successfully!');
      let role = data.role;
      console.log('role: ', role);
      let path = role == null || role == 'user' ? '/productDetails' : '/details';
      console.log('path: ', path);
      this.router.navigate([path]);
    })
  }
}
