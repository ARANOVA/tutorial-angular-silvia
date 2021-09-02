import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalleresCursosComponent } from './talleres-cursos.component';

describe('TalleresCursosComponent', () => {
  let component: TalleresCursosComponent;
  let fixture: ComponentFixture<TalleresCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalleresCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalleresCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
