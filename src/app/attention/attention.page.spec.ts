import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttentionPage } from './attention.page';

describe('AttentionPage', () => {
  let component: AttentionPage;
  let fixture: ComponentFixture<AttentionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AttentionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
