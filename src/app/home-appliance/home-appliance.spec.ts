import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAppliance } from './home-appliance';

describe('HomeAppliance', () => {
  let component: HomeAppliance;
  let fixture: ComponentFixture<HomeAppliance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAppliance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAppliance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
