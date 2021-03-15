import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyByIdComponent } from './property-by-id.component';

describe('PropertyByIdComponent', () => {
  let component: PropertyByIdComponent;
  let fixture: ComponentFixture<PropertyByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
