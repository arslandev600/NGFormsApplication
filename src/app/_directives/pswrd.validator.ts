import { Attribute, Directive, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

@Directive({
  selector: '[appPswrdValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: PswrdValidatorDirective, multi: true }
  ]
  
})
export class PswrdValidatorDirective implements Validator {

  // // @Input('pswrd') pswrd:string;
  // constructor() { }
  // ngOnInit(): void {

  // }
  // validate(control: FormControl): ValidationErrors | null {
  //   console.log('validator called');
  //   if(this.pswrd != control.value){
  //     return { 'pswrdMatch': true, 'mesg': 'Password Does not Match' }
  //   }else{
  //     return null;
  //   }
  // }

  constructor(@Attribute('appPasswordvalidator') public PasswordControl: string) { }  
  validate(c: FormControl) {  
  
    console.log('pASSWORD DIRECTIVE CALLED');
    const Password = c.root.get(this.PasswordControl);  
    const ConfirmPassword = c;  
  
    if (ConfirmPassword.value === null) {  
      return null;  
    }  
  
    if (Password) {  
      const subscription: Subscription = Password.valueChanges.subscribe(() => {  
        ConfirmPassword.updateValueAndValidity();  
        subscription.unsubscribe();  
      });  
    }  
    return Password && Password.value !== ConfirmPassword.value ? { passwordMatchError: true } : null;  
  }  
  
}
