import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsComponent } from './departments.component';


describe('DepartmentsComponent', () => {
  let component: DepartmentsComponent;
  let fixture: ComponentFixture<DepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should show the departments', ()=>{
    component.onSelect(false)
    expect(component.selectedDepartment).toEqual(true)
  })

  it('should show enigineering department',()=>{
    component.onDepartmentClick("1")
    expect(component.departmentId).toEqual("1")
  })

  it('should show management department',()=>{
    component.onDepartmentClick("2")
    expect(component.departmentId).toEqual("2")
  })

  it('should show analytics department',()=>{
    component.onDepartmentClick("3")
    expect(component.departmentId).toEqual("3")
  })
  
  it('should toggle the selected department',()=>{
    component.onDepartmentClick("1")
    setTimeout(()=>{
      component.departments.forEach(item=>{
      if(item.id == "1"){
        expect(item.showDept).toBeTruthy()
      }      
    })
    },1000)
    
  })
});
