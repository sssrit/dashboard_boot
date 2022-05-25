import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallboxFourOptComponent } from './smallbox-four-opt.component';

describe('SmallboxFourOptComponent', () => {
  let component: SmallboxFourOptComponent;
  let fixture: ComponentFixture<SmallboxFourOptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallboxFourOptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallboxFourOptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
