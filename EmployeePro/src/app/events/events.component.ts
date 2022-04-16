import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  AllEmployees: any=[];
  constructor(private employeeService: EmployeeService) {

   }
  ngOnInit(): void {
    this.employeeService.getAllEmp().subscribe(data =>{
      this.AllEmployees= data;

      console.log("GetAllEmployee:",data)
    })
  }

}
