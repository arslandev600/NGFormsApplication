import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { CustomvalidationService } from './customvalidation.service';


@Directive({
  selector: '[appNumberOnlyPattern]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NumbersOnlyPatternDirective, multi: true }]
})
export class NumbersOnlyPatternDirective implements Validator {

  constructor(private customValidator: CustomvalidationService) { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.customValidator.numberOnly()(control);
  }
}