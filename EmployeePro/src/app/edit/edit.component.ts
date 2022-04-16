import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  employeeId = 0;
  editEmployee: any;
  editEmp: any;
  constructor(private activatedRoute: ActivatedRoute,
              private employeeService: EmployeeService,
              private formBuilder: FormBuilder,
              private router: Router){
              
              }
  ngOnInit(): void {
   this.activatedRoute.params.subscribe(data => {
     this.employeeId = data['id'];
   this.getEmployeeById();
   this.editEmployee = this.formBuilder.group({
    emailId: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
   })
   })
  }

  getEmployeeById() {
    this.employeeService.geEmployeeById(this.employeeId).subscribe(data => {
      this.editEmp = data;
      console.log('data : ' , data);
      this.editEmployee = this.formBuilder.group({
        'emailId': new FormControl(this.editEmp.emailId),
        'firstName': new FormControl(this.editEmp.firstName),
        'lastName': new FormControl(this.editEmp.lastName)
      })
    })
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.employeeId, this.editEmployee.value).subscribe(data => {
      console.log('editEmployee : ' , this.editEmployee.value);
      this.router.navigate(['/details']);
    })
    
  }

}
