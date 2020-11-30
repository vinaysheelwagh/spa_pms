import { Component, Input, OnInit } from '@angular/core';
import {Employees} from '../mock-employees'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  
  @Input('department') departmentId : string ;
  employee = {};  
  employees = Employees;
  allEmployees = Employees;

  constructor() { 
    this.departmentId="";
  }

  ngOnInit():void{
    //filtering employees based on department
    this.employees=this.allEmployees.filter(emp=>emp.deptId===this.departmentId);
  }

  onemployeeClick(empId: number, e: any):void{
    //toggle functionality to show employee details
    this.employees.forEach(element => {
      if(element.employeeId === empId){
        element.showEmployee = !element.showEmployee
        this.employee = element
      }
      e.stopPropagation()
    });
  }

  drag(e:any):void{
    e.dataTransfer.setData("text", e.target.id); 
  }

  
  drop(e:any){
    //droping selected element in particular department
    e.preventDefault();
    var data = e.dataTransfer.getData("text");  

    if (e.target.getAttribute('data-boxtype')=="red"){
      document.getElementById(data)?.setAttribute('style','display:none')
      e.target.appendChild(document.getElementById(data));
    }
    var lastChild = e.target.querySelectorAll('li')[e.target.querySelectorAll('li').length -1]
    var firstEmployee = e.target.querySelectorAll('li')[0]
    this.updateEmployeeDept(lastChild.id, String(firstEmployee.value))
  }

  allowDrop(e:any): void{
    e.preventDefault();
  }

  updateEmployeeDept(empId:number, deptId:string):void{
    // dynamic employee's department update
    this.allEmployees.map(item=>{
      if(item.employeeId == empId){
        item.deptId = deptId;
        this.employees.push(item);
      }
    })
  }
}
