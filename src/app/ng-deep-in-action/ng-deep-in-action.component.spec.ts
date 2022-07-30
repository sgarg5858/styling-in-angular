import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDeepInActionComponent } from './ng-deep-in-action.component';

describe('NgDeepInActionComponent', () => {
  let component: NgDeepInActionComponent;
  let fixture: ComponentFixture<NgDeepInActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDeepInActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDeepInActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
