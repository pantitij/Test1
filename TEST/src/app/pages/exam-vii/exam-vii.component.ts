import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-vii',
  templateUrl: './exam-vii.component.html',
  styleUrls: ['./exam-vii.component.scss']
})
export class ExamVIIComponent implements OnInit {

  constructor() { }
  resultA: any;
  resultB: any;

  ngOnInit() {
    this.onShowMorethanEightteen();
    this.onShowOnlyFiftyOne();
  }

  private onShowMorethanEightteen() {
    const ages = [11, 34, 8, 9, 23, 51, 17, 40, 14];
    this.resultA = ages.filter((res) => {
      return res > 18;
    });
    console.log(this.resultA);

  }

  private onShowOnlyFiftyOne() {
    const ages = [11, 34, 8, 9, 23, 51, 17, 40, 14];
    this.resultB = ages.filter((res) => {
      return res == 51;
    });
    console.log(this.resultB);

  }

}
