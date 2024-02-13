import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FootwearPage } from './footwear.page';

describe('FootwearPage', () => {
  let component: FootwearPage;
  let fixture: ComponentFixture<FootwearPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FootwearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
