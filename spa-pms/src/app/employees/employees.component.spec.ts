import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By, element } from 'protractor';

import { EmployeesComponent } from './employees.component';

describe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter employees based on given department',()=>{
    component.departmentId = "1" 
    component.ngOnInit()
    component.allEmployees = component.allEmployees.filter(emp =>
      emp.deptId === component.departmentId
    )
    expect(component.employees.length).toEqual(component.allEmployees.length)
  })

  it('should toggle employee details on click',()=>{
    component.onemployeeClick(1,Event)
    component.employees.map(emp=>{
      if(emp.employeeId == 1){
        expect(emp.showEmployee).toBeTruthy()
      }
    })
  })

  it('should prevent default events while dragging over the element',()=>{
    const event = new DragEvent('drop'); 
    spyOn(event, 'preventDefault');
    component.allowDrop(event);
    expect(event.preventDefault).toHaveBeenCalled();
  })

  it('should update employees department dynamically',()=>{
    component.updateEmployeeDept(1,"3")
    const employee = component.allEmployees.find(emp => emp.employeeId == 1)
    expect(employee?.deptId).toEqual("3")
  })
});
