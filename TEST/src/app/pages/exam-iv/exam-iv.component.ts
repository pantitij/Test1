import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-iv',
  templateUrl: './exam-iv.component.html',
  styleUrls: ['./exam-iv.component.scss']
})
export class ExamIVComponent implements OnInit {
  checked: boolean = false;
  // dataList: any;
  dataList: any[] = [];
  constructor() { }
  ngOnInit() {
    this.getData();
  }

  private getData() {
    this.dataList = [
      {
        id: '1',
        certificateNameType: 'งานวางหมุด',
        workList: [
          {
            id: '1',
            name: '01-งานเสาเข็มตอก'
          },
          {
            id: '2',
            name: '02-งานแค็ปหัวเข็ม'
          },
          {
            id: '3',
            name: '10-งานเทพื้นชั้น1'
          }
        ]

      },
      {
        id: '2',
        certificateNameType: 'เสาเข็มตอก',
        workList: [
          {
            id: '1',
            name: '01-งานเสาเข็มตอก'
          },
          {
            id: '2',
            name: '02-งานแค็ปหัวเข็ม'
          },
          {
            id: '3',
            name: '10-งานเทพื้นชั้น1'
          },
          {
            id: '4',
            name: '11060303งานฐานราก'
          }
        ]

      }

    ];

  }

}
