import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamVIIIComponent } from './exam-viii.component';

describe('ExamVIIIComponent', () => {
  let component: ExamVIIIComponent;
  let fixture: ComponentFixture<ExamVIIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamVIIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamVIIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
