import { Component, OnInit } from '@angular/core';
import {
  DateAdapter,
  MAT_DATE_FORMATS
} from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from './date.adapter';
@Component({
  selector: 'app-exam-ii',
  templateUrl: './exam-ii.component.html',
  styleUrls: ['./exam-ii.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: APP_DATE_FORMATS
    }
  ],
})
export class ExamIIComponent implements OnInit {

  endDate: any;
  constructor() { }

  ngOnInit() {
  }

  private getEndDate(endDate) {
    const day = endDate.getDate().toString();
    const month = endDate.getMonth() + 1;
    const year = endDate.getFullYear() + 543;
    const showEndDate = day + '/' + month.toString() + '/' + year.toString();
    window.alert(showEndDate);
  }




}
