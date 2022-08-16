import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamPublisherComponent } from './exam-publisher.component';

describe('ExamPublisherComponent', () => {
  let component: ExamPublisherComponent;
  let fixture: ComponentFixture<ExamPublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamPublisherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
