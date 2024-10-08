import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInput} from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Aadhar } from '../aadhar';
import { HomeserviceService } from '../homeservice.service';
import { error } from 'console';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule,MatInput,MatCardModule,MatButtonModule,MatIconModule,CommonModule,FormsModule,ReactiveFormsModule,MatDialogModule,CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  aadhar:Aadhar=new Aadhar();
  registerform:FormGroup;
  selectedFile:File | null=null;
  constructor(private service:HomeserviceService,private route:Router,private snackBar:MatSnackBar,private fb:FormBuilder){
    this.registerform=this.fb.group({
      aadharNumber:['',Validators.required],
      name:['',Validators.required],
      address:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      contact:['',[Validators.required,Validators.minLength(9)]]
    })
   }


 register(){
  this.service.addDetails(this.aadhar).subscribe(data=>{
    this.snackBar.open(data.message,'Close',{duration:5000});
    this.goHome();
  },error=>{this.snackBar.open('Invalid Details','Close',{duration:5000})});
  
  }

  goHome(){
    this.route.navigate(['home']);
  }
 


}
