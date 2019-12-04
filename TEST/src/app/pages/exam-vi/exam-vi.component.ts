import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-exam-vi',
  templateUrl: './exam-vi.component.html',
  styleUrls: ['./exam-vi.component.scss']
})
export class ExamVIComponent implements OnInit {
  closeResult: string;
  data: any;
  jobGroupNameDRP: any[] = [];
  showData: any = [];
  showAlert;
  newstartDate;
  newstartDateendDate;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.getData();
    this.data.startDate = this.stringDatetoDateFormatter(this.data.startDate);
    this.data.endDate = this.stringDatetoDateFormatter(this.data.endDate);
    console.log(this.data.startDate);
    console.log(this.data.endDate);
    this.getJobGroupNameDRP();
  }

  onAddJobStyleList(name) {
    const data = {
      name
    };
    this.data.jobStyleList.push(data);
    console.log(this.data.jobStyleList);
    console.log(name);
  }

  onSubmit(data) {
    this.showData.push(data);
    this.showData.forEach(res => {
      return this.showAlert = res;
    });
    alert(JSON.stringify(this.showAlert));
    console.log(this.showAlert);
  }

  private getJobGroupNameDRP() {
    this.jobGroupNameDRP = [
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
    ];

  }

  private getData() {
    this.data = {
      code: '',
      jobGroupName: '',
      budgetCode: '',
      jobName: '',
      detail: '',
      active: true,
      jobStyleList: [
        {
          name: ''
        },
        {
          name: ''
        }
      ],
      startDate: '24/12/2562',
      endDate: '31/12/2562'
    };
  }



  private open(content) {
    this.data.jobStyleList.name = '';
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  private stringDatetoDateFormatter(value) {

    if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
      const str = value.split('/');
      const year = Number(str[2]) - 543;
      const month = Number(str[1]) - 1;
      const date = Number(str[0]);
      return new Date(year, month, date);
    }
    const timestamp = typeof value === 'number' ? value : Date.parse(value);
    return isNaN(timestamp) ? null : new Date(timestamp);
  }

  private datetoStringDateFormatter(value) {
    const day = value.getDate().toString();
    const month = value.getMonth() + 1;
    const year = value.getFullYear() + 543;
    const showEndDate = day + '/' + month.toString() + '/' + year.toString();
    console.log(showEndDate);
  }
}
