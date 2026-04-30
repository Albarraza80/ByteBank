import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaTransferencia } from './nueva-transferencia';

describe('NuevaTransferencia', () => {
  let component: NuevaTransferencia;
  let fixture: ComponentFixture<NuevaTransferencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevaTransferencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaTransferencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
