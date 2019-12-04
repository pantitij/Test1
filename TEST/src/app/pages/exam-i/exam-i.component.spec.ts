import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamIComponent } from './exam-i.component';

describe('ExamIComponent', () => {
  let component: ExamIComponent;
  let fixture: ComponentFixture<ExamIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
