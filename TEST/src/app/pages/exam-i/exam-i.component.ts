import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-i',
  templateUrl: './exam-i.component.html',
  styleUrls: ['./exam-i.component.scss']
})
export class ExamIComponent implements OnInit {
  projectDRP: any[] = [];
  projectDefaultDRP = {
    id: '1',
    projectName: ''
  };
  constructor() { }

  ngOnInit() {
    this.getData();
  }

  private getData() {
    this.projectDRP = [
      {
        id: '1',
        projectName: 'โครงการแกรนด์วัลเลย์'
      },
      {
        id: '2',
        projectName: 'โครงการแกรนด์วัลเลย์ 2'
      },
      {
        id: '3',
        projectName: 'โครงการแกรนด์โฮม'
      }
    ];
  }
}
