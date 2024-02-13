import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccessoriesPage } from './accessories.page';

describe('AccessoriesPage', () => {
  let component: AccessoriesPage;
  let fixture: ComponentFixture<AccessoriesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccessoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
