import { FormControl } from '@angular/forms';

export class CustomValidators {
  static yearValidator(controle: FormControl) {
    // if (controle.value.trim().length === 0) {
    //   return null;
    // }

    const currYear = parseInt(controle.value, 10);

    let currentDate = new Date();
    const maxYear = currentDate.getFullYear();
    const minYear = 1886;

    if (minYear < currYear && currYear <= maxYear) {
      return null;
    } else {
      return { year: true };
    }
  }
}
