import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsListComponent } from './request-list.component';

describe('RequestListComponent', () => {
  let component: RequestsListComponent;
  let fixture: ComponentFixture<RequestsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestsListComponent]
    });
    fixture = TestBed.createComponent(RequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
