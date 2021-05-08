import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesProductosComponent } from './detalles-productos.component';

describe('DetallesProductosComponent', () => {
  let component: DetallesProductosComponent;
  let fixture: ComponentFixture<DetallesProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
