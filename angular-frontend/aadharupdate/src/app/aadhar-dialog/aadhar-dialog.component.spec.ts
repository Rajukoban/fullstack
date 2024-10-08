import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadharDialogComponent } from './aadhar-dialog.component';

describe('AadharDialogComponent', () => {
  let component: AadharDialogComponent;
  let fixture: ComponentFixture<AadharDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AadharDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AadharDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
