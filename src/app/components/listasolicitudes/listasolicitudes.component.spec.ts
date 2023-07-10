import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasolicitudesComponent } from './listasolicitudes.component';

describe('ListasolicitudesComponent', () => {
  let component: ListasolicitudesComponent;
  let fixture: ComponentFixture<ListasolicitudesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListasolicitudesComponent]
    });
    fixture = TestBed.createComponent(ListasolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
