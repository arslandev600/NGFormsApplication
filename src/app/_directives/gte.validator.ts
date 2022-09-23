import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms'
import { Directive, OnInit, forwardRef } from '@angular/core';
 
 
@Directive({
  selector: '[gteValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: gteValidatorDirective, multi: true }
  ]
  
})
export class gteValidatorDirective implements Validator, OnInit {
 
  ngOnInit() {
  }
 
  validate(c: FormControl) {
 
    let v: number = +c.value;
 
    if (isNaN(v)) {
      return { 'gte': true, 'requiredValue': 10 }
    }
 
    if (v <= +10) {
      return { 'gte': true, 'requiredValue': 10 }
    }
 
    return null;
  }
}