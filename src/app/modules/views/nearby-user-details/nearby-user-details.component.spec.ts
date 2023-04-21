import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyUserDetailsComponent } from './nearby-user-details.component';

describe('NearbyUserDetailsComponent', () => {
  let component: NearbyUserDetailsComponent;
  let fixture: ComponentFixture<NearbyUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearbyUserDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NearbyUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
