import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosRecomendadosComponent } from './libros-recomendados.component';

describe('LibrosRecomendadosComponent', () => {
  let component: LibrosRecomendadosComponent;
  let fixture: ComponentFixture<LibrosRecomendadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrosRecomendadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosRecomendadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
