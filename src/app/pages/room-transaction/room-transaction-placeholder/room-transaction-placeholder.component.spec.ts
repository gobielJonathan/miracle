import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTransactionPlaceholderComponent } from './room-transaction-placeholder.component';

describe('RoomTransactionPlaceholderComponent', () => {
  let component: RoomTransactionPlaceholderComponent;
  let fixture: ComponentFixture<RoomTransactionPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomTransactionPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomTransactionPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
