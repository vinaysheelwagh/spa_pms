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
    onSelect(isSelected: boolean): void{
      this.selectedDepartment = !isSelected;
    }
  onDepartmentClick(departmentId: string ): void{
    this.departmentId = departmentId
    this.departments.forEach(element => {
      if (element.id === departmentId){
        element.showDept = !element.showDept
      }
    });
    console.log(this.departmentId)
  }
}
