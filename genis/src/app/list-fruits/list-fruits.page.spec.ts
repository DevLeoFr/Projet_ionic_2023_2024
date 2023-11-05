import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListFruitsPage } from './list-fruits.page';

describe('ListFruitsPage', () => {
  let component: ListFruitsPage;
  let fixture: ComponentFixture<ListFruitsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListFruitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
