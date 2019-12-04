import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamIIComponent } from './exam-ii.component';

describe('ExamIIComponent', () => {
  let component: ExamIIComponent;
  let fixture: ComponentFixture<ExamIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
