import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosEditorialesComponent } from './servicios-editoriales.component';

describe('ServiciosEditorialesComponent', () => {
  let component: ServiciosEditorialesComponent;
  let fixture: ComponentFixture<ServiciosEditorialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosEditorialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosEditorialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
