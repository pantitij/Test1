import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-iii',
  templateUrl: './exam-iii.component.html',
  styleUrls: ['./exam-iii.component.scss']
})
export class ExamIIIComponent implements OnInit {

  isActive: boolean = true;
  userData = {
    name: '',
    surename: '',
    address: ''
  };
  warnMessage: string;
  color: string;
  constructor() { }

  ngOnInit() {
  }

  private saveUserData(userData) {
    if (userData.name !== '' && userData.surename !== '' && userData.address !== '') {
      this.warnMessage = 'บันทึกสำเร็จ';
      this.color = 'green';
      this.isActive = false;
    } else if (userData.name == '') {
      this.warnMessage = 'กรุณากรอกชื่อ';
      this.color = 'red';
      this.isActive = false;
    } else if (userData.surename == '') {
      this.warnMessage = 'กรุณากรอกนามสกุล';
      this.color = 'red';
      this.isActive = false;
    } else if (userData.address == '') {
      this.warnMessage = 'กรุณากรอกที่อยู่';
      this.color = 'red';
      this.isActive = false;
    }
  }

}
