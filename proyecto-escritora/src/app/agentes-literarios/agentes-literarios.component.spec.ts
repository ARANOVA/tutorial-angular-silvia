import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentesLiterariosComponent } from './agentes-literarios.component';

describe('AgentesLiterariosComponent', () => {
  let component: AgentesLiterariosComponent;
  let fixture: ComponentFixture<AgentesLiterariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentesLiterariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentesLiterariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
