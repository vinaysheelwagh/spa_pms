import { Component, OnInit, Input } from '@angular/core';
import {Employees} from '../mock-employees'
import {Employee} from '../employee'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input('emp') employee : Employee ;
  employees = Employees

  constructor() { 
    this.employee = {
    employeeId: 0,
    deptId: "",
    firstName: "",
    lastName: "",
    dob: "",
    speciality: "",
    showEmployee: false
    }
  }

  ngOnInit(): void {
  }

}
