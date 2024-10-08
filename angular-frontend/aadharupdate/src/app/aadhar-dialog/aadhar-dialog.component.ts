import { Component,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { Aadhar } from '../aadhar';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-aadhar-dialog',
  standalone: true,
  imports: [MatFormField,MatLabel,FormsModule,MatInput,MatInputModule,MatButtonModule,MatDialogClose],
  templateUrl: './aadhar-dialog.component.html',
  styleUrl: './aadhar-dialog.component.css',
  preserveWhitespaces:true
})
export class AadharDialogComponent {
  constructor(
    public dialogRef:MatDialogRef<AadharDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Aadhar
  ){}

  onNoClick():void{
    this.dialogRef.close();
  }

}
