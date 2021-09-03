import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalleresDialogComponent } from './talleres-dialog.component';

describe('TalleresDialogComponent', () => {
  let component: TalleresDialogComponent;
  let fixture: ComponentFixture<TalleresDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalleresDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalleresDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
