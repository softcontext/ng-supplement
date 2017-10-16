import { Component } from '@angular/core';
import { DateAdapter, NativeDateAdapter, MAT_DATE_FORMATS } from '@angular/material';

class MyDateAdapter extends NativeDateAdapter {
  // https://blog.angular.io/taking-advantage-of-the-angular-material-datepicker-237e80fa14b3
  // One of the coolest things about the DateAdapter design
  // is that it allows the entire datepicker
  // to be generic and work with any kind of date object you like.
  // For example, say you’re already using Moment.js throughout your app, you can create a MomentDateAdapter:
  // parse(value: any, parseFormat: any): Moment {
  //   // Implementation for remaining abstract methods of DateAdapter.
  //   return moment(value, parseFormat);
  // }

  format(date: Date, displayFormat: Object): string {
    if (displayFormat == "input") {
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      // return this._to2digit(day) + '/' + this._to2digit(month) + '/' + year;
      return year + '-' + this._to2digit(month) + '-' + this._to2digit(day);
    } else {
      return date.toDateString();
    }
  }

  private _to2digit(n: number) {
    return ('00' + n).slice(-2);
  }
}

export const APP_DATE_FORMATS =
{
   parse: {
      //  dateInput: {month: 'short', year: 'numeric', day: 'numeric'}
       dateInput: 'LL',
   },
   display: {
       // dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
       dateInput: 'input',
      //  monthYearLabel: { month: 'short', year: 'numeric', day: 'numeric' },
       monthYearLabel: 'MMM YYYY',
       dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
       monthYearA11yLabel: {year: 'numeric', month: 'long'},
   }
}


/**
 * @title Basic datepicker
 */
@Component({
  selector: 'datepicker-overview-example',
  templateUrl: 'datepicker-overview-example.html',
  styleUrls: ['datepicker-overview-example.css'],
  providers: [
    { provide: DateAdapter, useClass: MyDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class DatepickerOverviewExample {
  myDate = new Date();
  constructor(dateAdapter: DateAdapter<NativeDateAdapter>) {
    // dateAdapter.setLocale('en-US');
  }
}
