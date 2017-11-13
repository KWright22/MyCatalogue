import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[whiteSpace][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: WhiteSpaceDirective, multi: true}]
})

export class WhiteSpaceDirective implements Validator {
    @Input() whiteSpace: string;

    whiteSpaceValidator(reg: RegExp): ValidatorFn {
        console.log("***** in white space validator");
        return (control: AbstractControl): {[key: string]: any} => {
            const pattern = reg.test(control.value);
            return pattern ? {'whiteSpace': {value: control.value}} : null;
        };
    }

    validate(control: AbstractControl): {[key: string]: any} {
        return this.whiteSpace ? this.whiteSpaceValidator(new RegExp(this.whiteSpace, 'i'))(control) : null;
      }
}