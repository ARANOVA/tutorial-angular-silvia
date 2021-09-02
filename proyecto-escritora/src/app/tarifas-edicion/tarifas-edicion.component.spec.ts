import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifasEdicionComponent } from './tarifas-edicion.component';

describe('TarifasEdicionComponent', () => {
  let component: TarifasEdicionComponent;
  let fixture: ComponentFixture<TarifasEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarifasEdicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifasEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
