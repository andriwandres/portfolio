import { TestBed } from '@angular/core/testing';
import AppComponent from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should load the component', () => {
    expect(component).toBeTruthy();
  });
});
