import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  AllEmployees: any=[];
  constructor(private employeeService: EmployeeService) { 
 }

  ngOnInit(): void {
    this.employeeService.getAllEmp().subscribe(data =>{
      this.AllEmployees= data;

      console.log("GetAllEmployee:",data)
    })
  }

  removeEmployee(employee: any, index: any) {
    this.employeeService.deleteEmployee(employee.id).subscribe(data => {
      console.log('data : ' , data);
      let index = this.AllEmployees[employee];
      this.AllEmployees.splice(index, 1);
      // this.AllEmployees();
      console.log('Deleted!');
    })
  }

}
