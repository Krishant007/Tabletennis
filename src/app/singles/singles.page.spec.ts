import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SinglesPage } from './singles.page';

describe('SinglesPage', () => {
  let component: SinglesPage;
  let fixture: ComponentFixture<SinglesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SinglesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
