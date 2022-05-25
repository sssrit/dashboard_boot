import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBoxesComponent } from './small-boxes.component';

describe('SmallBoxesComponent', () => {
  let component: SmallBoxesComponent;
  let fixture: ComponentFixture<SmallBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallBoxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
