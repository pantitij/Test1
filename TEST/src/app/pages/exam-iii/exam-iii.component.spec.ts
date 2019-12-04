import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamIIIComponent } from './exam-iii.component';

describe('ExamIIIComponent', () => {
  let component: ExamIIIComponent;
  let fixture: ComponentFixture<ExamIIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamIIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamIIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
