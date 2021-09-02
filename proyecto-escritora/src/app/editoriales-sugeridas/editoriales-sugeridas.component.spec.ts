import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialesSugeridasComponent } from './editoriales-sugeridas.component';

describe('EditorialesSugeridasComponent', () => {
  let component: EditorialesSugeridasComponent;
  let fixture: ComponentFixture<EditorialesSugeridasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorialesSugeridasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialesSugeridasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
