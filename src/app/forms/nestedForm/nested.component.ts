import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-nested',
    templateUrl: 'nested.component.html'
})

export class NestedComponent implements OnInit {
    
        ngOnInit() { }

        


    // newSkills():FormGroup {
    //     return  this.builder.group({
    //         skill:'',
    //         experience:1,
    //     })
    // }
    countries = [
        { id: 1, name: "United States" },
        { id: 2, name: "Australia" },
        { id: 3, name: "Canada" },
        { id: 4, name: "Brazil" },
        { id: 5, name: "England" }
      ];
    nestedForm:FormGroup;
    constructor(private builder: FormBuilder) { 
        this.nestedForm =  this.builder.group({
            country:[null],
            skills:this.builder.array([
                new FormControl(),
                new FormControl(),
                new FormControl(),
                new FormControl(),
                new FormControl(),
            ])
        });

        this.nestedForm.get('country')?.valueChanges.subscribe(
            x=>{
                console.log(x); //latest value
            }
        )
    }

    skills(): FormArray{
        return this.nestedForm.get('skills') as FormArray
    }
    addSkill(){
        this.skills().push(new FormControl());
    }
    removeSkill(skillIndex: number){
        this.skills().removeAt(skillIndex);
    }

    //listen to country valueChanges
  
 
  onCountryChanged(value:string) {
    console.log('onCountryChanged')
    console.log(value)
  }
    ///============ Add Form Group to an array

    // //Getter Method property 
    // get Skills(): FormArray{
    //     return this.nestedForm.get('skills') as FormArray;
    // }

 
    // addSkill(){
    //     this.Skills.push(this.newSkills());
    // }
    // removeSkill(i :number){
    //     this.Skills.removeAt(i);
    // }

    // onSubmit(){
    //     console.log(this.nestedForm.value);
    // }
}