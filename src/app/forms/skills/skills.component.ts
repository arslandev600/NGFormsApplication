import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-skills',
    templateUrl: 'skills.component.html'
})

export class SkillsComponent implements OnInit {
    skillsForm: FormGroup;
 
    constructor(private fb:FormBuilder) {
   
      this.skillsForm = this.fb.group({
        name: '',
        skills: this.fb.array([]) ,
      });
    
    }
    get skills() : FormArray {
        return this.skillsForm.get("skills") as FormArray
      }

    //   The method newSkill creates a new FormGroup and returns it. Note that we won’t be able to assign a name to Form Group.
      newSkill(): FormGroup {
        return this.fb.group({
          skill: '',
          exp: '',
        })
     }
     addSkills() {
        this.skills.push(this.newSkill());
     }
     removeSkill(i:number) {
        this.skills.removeAt(i);
        
      }
      onSubmit(){
        
        console.log(this.skillsForm.value);
      }
    ngOnInit() { }
}