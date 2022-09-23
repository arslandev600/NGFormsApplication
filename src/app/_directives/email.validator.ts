import { Directive } from '@angular/core';  
import { Validator, NG_VALIDATORS, ValidatorFn, FormControl } from '@angular/forms';  
  
@Directive({  
  selector: '[appEmailvalidator]'
})  
export class EmailvalidatorDirective implements Validator {  
  
  validator: ValidatorFn;  
  constructor() {  
    console.log('Email validator called');
    this.validator = this.emailValidator();  
  }  
  
  validate(c: FormControl) {  
    console.log('Email validator function called');
    return this.validator(c);  
  }  
  
  emailValidator(): ValidatorFn {  
    return (control: any) => {  
      if (control.value != null && control.value !== '') {  
        let isValid = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(control.value);  
        if (isValid) {  
          return null;  
        } else {  
          return {  
            emailvalidator: { valid: false }  
          };  
        }  
      } else {  
        return null;  
      }  
    };  
  }  
} 