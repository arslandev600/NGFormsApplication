import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-employee-form',
    templateUrl: 'employee.form.component.html'
})

export class EmployeeFormComponent implements OnInit {
    
// =====FOrm TEMPLATE==================    
// username 
// date:
// employees:	
//  	firstname:
// 	    lastname
// 	    skills:	
// 		    skill
// 		    exp

    employeeForm:FormGroup;
    constructor(private builder: FormBuilder) {

        this.employeeForm = this.builder.group({
            username:'',
            date:'',
            employees : this.builder.array([])
        })
     }
     
    newSkill():FormGroup{
        return this.builder.group({
            skill:'',
            exp:''
        })
    }
    newEmployee():FormGroup {
        return this.builder.group({
            firstname:'',
            lastname:'',
            skills :this.builder.array([])
        })
    }
    employees() : FormArray {
        return this.employeeForm.get('employees') as FormArray;
    }
    addEmployee() {
        this.employees().push(this.newEmployee());
      }
     
    removeEmployee(empIndex: number) {
        this.employees().removeAt(empIndex);
      }


    employeeSkills(empIndex: number) : FormArray {
        return this.employees().at(empIndex)
        .get('skills') as FormArray
    }

    addEmployeeSkill(empIndex :  number){
        this.employeeSkills(empIndex).push(this.newSkill());
    }
    
    removeEmployeeSkill(empIndex :number,skillIndex: number){
        this.employeeSkills(empIndex).removeAt(skillIndex);
    }






    ngOnInit() { }
    onSubmit(){

    }
}