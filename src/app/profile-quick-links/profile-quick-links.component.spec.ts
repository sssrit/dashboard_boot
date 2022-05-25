import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileQuickLinksComponent } from './profile-quick-links.component';

describe('ProfileQuickLinksComponent', () => {
  let component: ProfileQuickLinksComponent;
  let fixture: ComponentFixture<ProfileQuickLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileQuickLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileQuickLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
