import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueProcessingComponent } from './value-processing.component';

describe('ValueProcessingComponent', () => {
  let component: ValueProcessingComponent;
  let fixture: ComponentFixture<ValueProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueProcessingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
