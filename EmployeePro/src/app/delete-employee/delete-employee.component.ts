import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  employeeId: string = '';

  constructor(private activatedRoute: ActivatedRoute,
              private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.employeeId = data['id']
    })
    this.employeeService.deleteEmployee(this.employeeId).subscribe(data => {
      console.log('data : ' , data);
      this.router.navigate(['/details']);
      console.log('Employee deleted successfully!');
      
    })
  }

}
