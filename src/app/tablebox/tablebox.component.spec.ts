import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableboxComponent } from './tablebox.component';

describe('TableboxComponent', () => {
  let component: TableboxComponent;
  let fixture: ComponentFixture<TableboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
