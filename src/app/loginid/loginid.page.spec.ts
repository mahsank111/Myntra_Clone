import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { LoginidPage } from './loginid.page';

describe('LoginidPage', () => {
  let component: LoginidPage;
  let fixture: ComponentFixture<LoginidPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
