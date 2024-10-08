import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Aadhar } from '../aadhar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-view-details',
  standalone: true,
  imports: [MatListModule,MatButtonModule,MatCardModule],
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.css'
})
export class ViewDetailsComponent {
  constructor(
    public dialogRef: MatDialogRef<ViewDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public aadhar: Aadhar
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

}
