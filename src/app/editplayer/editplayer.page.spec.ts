import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditplayerPage } from './editplayer.page';

describe('EditplayerPage', () => {
  let component: EditplayerPage;
  let fixture: ComponentFixture<EditplayerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditplayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
