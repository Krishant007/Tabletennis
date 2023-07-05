import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoublesPage } from './doubles.page';

describe('DoublesPage', () => {
  let component: DoublesPage;
  let fixture: ComponentFixture<DoublesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DoublesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
