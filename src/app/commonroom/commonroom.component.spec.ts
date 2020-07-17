import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonroomComponent } from './commonroom.component';

describe('CommonroomComponent', () => {
  let component: CommonroomComponent;
  let fixture: ComponentFixture<CommonroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
