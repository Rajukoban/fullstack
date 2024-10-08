import { Component } from '@angular/core';
import {MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatFormField, MatInputModule,MatInput} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Aadhar } from '../aadhar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'; 
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule,MatButtonModule,MatCardModule,FormsModule,CommonModule,MatFormField,MatInput,RouterLink,RouterOutlet,ReactiveFormsModule,MatSnackBarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:FormGroup;

  constructor(private fb:FormBuilder,private router:Router,private snackBar:MatSnackBar,private auth:AuthService){
    this.loginForm=this.fb.group({
      email:['',Validators.required],
      aadharNumber:['',Validators.required]
    });
  }

  onLogin():void{
    if(this.loginForm.valid){
      const {email,aadharNumber}=this.loginForm.value;
      this.auth.login(email,aadharNumber).subscribe(success=>{
        if(success){
          this.router.navigate(['home']);
          this.snackBar.open('Login success','Close',{duration:5000});
        }else{
          this.snackBar.open('Invalid Details','Close',{duration:5000});
        }
      });

    }
  }

}
