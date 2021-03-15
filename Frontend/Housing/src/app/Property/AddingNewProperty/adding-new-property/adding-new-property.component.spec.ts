import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingNewPropertyComponent } from './adding-new-property.component';

describe('AddingNewPropertyComponent', () => {
  let component: AddingNewPropertyComponent;
  let fixture: ComponentFixture<AddingNewPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingNewPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingNewPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
