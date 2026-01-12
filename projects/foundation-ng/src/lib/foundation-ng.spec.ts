import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationNg } from './foundation-ng';

describe('FoundationNg', () => {
  let component: FoundationNg;
  let fixture: ComponentFixture<FoundationNg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoundationNg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundationNg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
