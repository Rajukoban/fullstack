import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInput} from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Aadhar } from '../aadhar';
import { HomeserviceService } from '../homeservice.service';
import { error } from 'console';


@Component({
  selector: 'app-update',
  standalone: true,
  imports: [MatFormFieldModule,MatInput,MatCardModule,MatButtonModule,MatIconModule,CommonModule,FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  aadhar:Aadhar=new Aadhar();
  aadharNumber!:number;
  constructor(private service:HomeserviceService,private active:ActivatedRoute,private route:Router){
    this.aadharNumber=this.active.snapshot.params['aadharNumber'];
    this.service.getById(this.aadharNumber).subscribe(data=>{
      this.aadhar=data;
    })
  }

  updateDetails(){
    this.service.edit(this.aadharNumber,this.aadhar).subscribe(data=>{
      confirm("Updated Successfully...");
      this.route.navigate(['home']);
    },error=>{alert("something wrong...")})

  }

}
