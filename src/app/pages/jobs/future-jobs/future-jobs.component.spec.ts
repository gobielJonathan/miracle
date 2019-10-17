import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureJobsComponent } from './future-jobs.component';

describe('FutureJobsComponent', () => {
  let component: FutureJobsComponent;
  let fixture: ComponentFixture<FutureJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
