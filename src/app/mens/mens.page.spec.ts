import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MensPage } from './mens.page';

describe('MensPage', () => {
  let component: MensPage;
  let fixture: ComponentFixture<MensPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
