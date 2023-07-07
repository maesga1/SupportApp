import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionSolicitudComponent } from './edicion-solicitud.component';

describe('EdicionSolicitudComponent', () => {
  let component: EdicionSolicitudComponent;
  let fixture: ComponentFixture<EdicionSolicitudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdicionSolicitudComponent]
    });
    fixture = TestBed.createComponent(EdicionSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
