import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamVIIComponent } from './exam-vii.component';

describe('ExamVIIComponent', () => {
  let component: ExamVIIComponent;
  let fixture: ComponentFixture<ExamVIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamVIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamVIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
