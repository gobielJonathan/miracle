import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryJobsComponent } from './history-jobs.component';

describe('HistoryJobsComponent', () => {
  let component: HistoryJobsComponent;
  let fixture: ComponentFixture<HistoryJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
