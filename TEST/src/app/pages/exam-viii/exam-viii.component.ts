import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-viii',
  templateUrl: './exam-viii.component.html',
  styleUrls: ['./exam-viii.component.scss']
})
export class ExamVIIIComponent implements OnInit {


  data: any;

  constructor() {
    this.getData();
  }

  ngOnInit() { }

  private getData() {
    this.data = {
      price: 0,
      discount: 0,
      discountPrice: 0
    };
  }


}
