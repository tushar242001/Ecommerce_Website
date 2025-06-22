import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homefurniture } from './homefurniture';

describe('Homefurniture', () => {
  let component: Homefurniture;
  let fixture: ComponentFixture<Homefurniture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homefurniture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homefurniture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
