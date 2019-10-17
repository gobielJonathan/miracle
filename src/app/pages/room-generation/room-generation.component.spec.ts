import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomGenerationComponent } from './room-generation.component';

describe('RoomGenerationComponent', () => {
  let component: RoomGenerationComponent;
  let fixture: ComponentFixture<RoomGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
