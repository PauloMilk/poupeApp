
// import {Component, Injectable} from '@angular/core';
// import {NgbDatepickerI18n, NgbDateStruct, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

// const I18N_VALUES = {
//   'pt-br': {
//     weekdays: ['dom', 'seg', 'ter', 'qua', 'qui', 'sab', 'dom'],
//     months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
//   }
//   // other languages you would support
// };

// // Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// // use the Angular LOCALE_ID value
// @Injectable()
// export class I18n {
//   language = 'pt-br';
// }

// function padNumber(value: number) {
//     if (isNumber(value)) {
//         return `0${value}`.slice(-2);
//     } else {
//         return '';
//     }
// }

// function isNumber(value: any): boolean {
//     return !isNaN(toInteger(value));
// }

// function toInteger(value: any): number {
//     return parseInt(`${value}`, 10);
// }

// @Injectable()
// export class CustomDatepickerI18n  extends NgbDateParserFormatter {
//     parse(value: string): NgbDateStruct {
//         if (value) {
//             const dateParts = value.trim().split('/');
//             if (dateParts.length === 1 && isNumber(dateParts[0])) {
//                 return {year: toInteger(dateParts[0]), month: null, day: null};
//             } else if (dateParts.length === 2 && isNumber(dateParts[0])
//                 && isNumber(dateParts[1])) {
//                 return {year: toInteger(dateParts[1]), month: toInteger(dateParts[0]), day: null};
//             } else if (dateParts.length === 3 && isNumber(dateParts[0])
//                 && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
//                 return {year: toInteger(dateParts[2]), month: toInteger(dateParts[1]), day: toInteger(dateParts[0])};
//             }
//         }
//         return null;
//     }

//     format(date: NgbDateStruct): string {
//         let stringDate: string = '';
//         if (date) {
//             stringDate += isNumber(date.day) ? padNumber(date.day) + '/' : '';
//             stringDate += isNumber(date.month) ? padNumber(date.month) + '/' : '';
//             stringDate += date.year;
//         }
//         return stringDate;
//     }

//     getDayAriaLabel(date: import('@ng-bootstrap/ng-bootstrap').NgbDateStruct): string {
//       return date.day.toString();
//      }
// }

import { Injectable } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

const I18N_VALUES = {
  'pt': {
    weekdays: ['dom', 'seg', 'ter', 'qua', 'qui', 'sab', 'dom'],
    months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  }
  // other languages you would support
};

// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
@Injectable()
export class I18n {
  language = 'pt';
}

// Define custom service providing the months and weekdays translations
@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {

  constructor(private _i18n: I18n) {
    super();
  }

  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}/${date.month}/${date.year}`;
  }
}

function padNumber(value: number) {
  if (isNumber(value)) {
      return `0${value}`.slice(-2);
  } else {
      return '';
  }
}

function isNumber(value: any): boolean {
  return !isNaN(toInteger(value));
}

function toInteger(value: any): number {
  return parseInt(`${value}`, 10);
}

@Injectable()
export class NgbDatePTParserFormatter extends NgbDateParserFormatter {
  parse(value: string): NgbDateStruct {
      if (value) {
          const dateParts = value.trim().split('-');
          if (dateParts.length === 1 && isNumber(dateParts[0])) {
              return {year: toInteger(dateParts[0]), month: null, day: null};
          } else if (dateParts.length === 2 && isNumber(dateParts[0])
              && isNumber(dateParts[1])) {
              return {year: toInteger(dateParts[1]), month: toInteger(dateParts[0]), day: null};
          } else if (dateParts.length === 3 && isNumber(dateParts[0])
              && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
              return {year: toInteger(dateParts[2]), month: toInteger(dateParts[1]), day: toInteger(dateParts[0])};
          }
      }
      return null;
  }

  format(date: NgbDateStruct): string {
      let stringDate: string = '';
      if (date) {
          stringDate += isNumber(date.day) ? padNumber(date.day) + '/' : '';
          stringDate += isNumber(date.month) ? padNumber(date.month) + '/' : '';
          stringDate += date.year;
      }
      return stringDate;
  }
}
