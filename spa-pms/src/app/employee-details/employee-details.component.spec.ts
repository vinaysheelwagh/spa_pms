import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsComponent } from './employee-details.component';

describe('EmployeeDetailsComponent', () => {
  let component: EmployeeDetailsComponent;
  let fixture: ComponentFixture<EmployeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsComponent);
    component = fixture.componentInstance;
    component.employee = {employeeId:123, firstName:"testName", lastName:"TestLastName", dob:"testDOB", speciality:"testSpec",deptId:"12",showEmployee:true}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get property employeee from employees component',()=>{
    expect(component.employee.employeeId).toBeGreaterThan(0) 
    expect(component.employee.showEmployee).toBeTruthy()
  })
});
