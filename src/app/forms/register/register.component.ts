import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms'
import { gte } from '../../_directives/custom.validator';

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
})

export class RegisterComponent implements OnInit {

    // registerForm: FormGroup = new FormGroup({
    //     firstname: new FormControl('',Validators.required),
    //     lastname: new FormControl(),
    //     email: new FormControl(),
    //     password: new FormControl(),
    //     confirmPassword: new FormControl(),
    //     gender: new FormControl(),
    //     dateOfBirth: new FormControl(),
    //     address: new FormGroup({
    //         street :  new FormControl(),
    //         city :  new FormControl(),
    //         country :  new FormControl(),
    //         zipcode :  new FormControl(),
    //     }),
    // })
    registerForm:FormGroup;
    constructor(private builder: FormBuilder) {
    this.registerForm = this.builder.group({
        firstname:['',Validators.required],
        lastname: ['',Validators.required],
        age:['',[gte,Validators.required]],
        email: [],
        password: ['',Validators.required],
        confirmPassword: ['',Validators.required],
        gender: [],
        dateOfBirth: [],
        address: this.builder.group({
            street : [],
            city :  [],
            country : [],
            zipcode :  [],
        }),
    },{
        validators:this.matchPassword
    })
}
  get lastname():FormControl{
    return this.registerForm.get('lastname') as FormControl
  }
  get age():FormControl{
    return this.registerForm.get('age') as FormControl
  }
  get password():FormControl{
    return this.registerForm.get('password') as FormControl
  }
  get confirmPassword():FormControl{
    return this.registerForm.get('confirmPassword') as FormControl
  }

  //Cross Field Validation
  matchPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    let pswrd = control.get('password')?.value;
    let confirmPassword = control.get('confirmPassword')?.value;
    if(pswrd != confirmPassword)
        { return {'noMatch':true} }    
    return  null; 
    
  }
 
    

    ngOnInit() { }

    onSumit(){
        console.log(this.registerForm.value);
    }

    setValue(){

    }
    setAddress(){

    }
    setSingleValue(){
        
     this.registerForm.registerControl('hello',new FormControl('',[Validators.required]))   
        this.registerForm.controls?.['firstname'].setValue('setValues');
    }

    withOutOnlySelf(){
        this.registerForm.controls?.['firstname'].setValue("");
      }
      withOnlySelf(){
        this.registerForm.controls?.['firstname'].setValue("",{onlySelf:true});
      }
}