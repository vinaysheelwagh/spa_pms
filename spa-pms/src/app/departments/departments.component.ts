import { Component, OnInit } from '@angular/core';
import {Departments} from '../mock-departments'

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departments = Departments;
  selectedDepartment = false;
  departmentId = "";
  constructor() { }

  ngOnInit(): void {
  }
  //Show all departments
  onSelect(isSelected: boolean): void{
    this.selectedDepartment = true;
  }
  //toggle the selected department
  onDepartmentClick(departmentId: string ): void{
    this.departmentId = departmentId
    this.departments.forEach(element => {
      if (element.id === departmentId){
        element.showDept = !element.showDept
      }
    });
  }
}
