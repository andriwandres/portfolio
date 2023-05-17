import { TestBed } from '@angular/core/testing';
import LandingComponent from './landing.component';

describe('LandingComponent', () => {
  let component: LandingComponent;

  beforeEach(() => {
    const fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
  });

  it('should load the component', () => {
    expect(component).toBeTruthy();
  });
});
