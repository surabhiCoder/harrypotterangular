import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatHallComponent } from './great-hall.component';

describe('GreatHallComponent', () => {
  let component: GreatHallComponent;
  let fixture: ComponentFixture<GreatHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreatHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreatHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
