import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[whiteSpace][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: WhiteSpaceDirective, multi: true}]
})

export class WhiteSpaceDirective implements Validator {
    validate(control: AbstractControl): {[key: string]: any} {
        if (!control.value) {
             return null;
        }
        return !control.value.replace(/\s/g, '').length ? {'whiteSpace': {value: control.value}} : null;      
      }
}