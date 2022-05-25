import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomboxCardsComponent } from './incombox-cards.component';

describe('IncomboxCardsComponent', () => {
  let component: IncomboxCardsComponent;
  let fixture: ComponentFixture<IncomboxCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomboxCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomboxCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
