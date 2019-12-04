import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamIVComponent } from './exam-iv.component';

describe('ExamIVComponent', () => {
  let component: ExamIVComponent;
  let fixture: ComponentFixture<ExamIVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamIVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamIVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
