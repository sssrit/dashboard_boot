import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomboxComponent } from './incombox.component';

describe('IncomboxComponent', () => {
  let component: IncomboxComponent;
  let fixture: ComponentFixture<IncomboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
