import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WomensPage } from './womens.page';

describe('WomensPage', () => {
  let component: WomensPage;
  let fixture: ComponentFixture<WomensPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WomensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
