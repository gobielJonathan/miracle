import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseOutlinePlaceholderComponent } from './course-outline-placeholder.component';

describe('CourseOutlinePlaceholderComponent', () => {
  let component: CourseOutlinePlaceholderComponent;
  let fixture: ComponentFixture<CourseOutlinePlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseOutlinePlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseOutlinePlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
