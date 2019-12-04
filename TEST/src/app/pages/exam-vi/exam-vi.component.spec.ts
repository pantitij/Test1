import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamVIComponent } from './exam-vi.component';

describe('ExamVIComponent', () => {
  let component: ExamVIComponent;
  let fixture: ComponentFixture<ExamVIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamVIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamVIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
