import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamVComponent } from './exam-v.component';

describe('ExamVComponent', () => {
  let component: ExamVComponent;
  let fixture: ComponentFixture<ExamVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
