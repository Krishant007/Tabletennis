import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PushnotiPage } from './pushnoti.page';

describe('PushnotiPage', () => {
  let component: PushnotiPage;
  let fixture: ComponentFixture<PushnotiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PushnotiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
