import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationTabHeaderComponent } from './navigation-tab-header.component';

describe('NavigationTabHeaderComponent', () => {
  let component: NavigationTabHeaderComponent;
  let fixture: ComponentFixture<NavigationTabHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationTabHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationTabHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
