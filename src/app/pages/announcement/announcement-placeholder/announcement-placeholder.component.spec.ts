import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementPlaceholderComponent } from './announcement-placeholder.component';

describe('AnnouncementPlaceholderComponent', () => {
  let component: AnnouncementPlaceholderComponent;
  let fixture: ComponentFixture<AnnouncementPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
