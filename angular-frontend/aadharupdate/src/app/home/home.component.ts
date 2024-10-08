import { Component, ViewChild} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Aadhar } from '../aadhar';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomeserviceService } from '../homeservice.service';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import {MatSnackBar} from '@angular/material/snack-bar'
import {MatDialog} from '@angular/material/dialog';
import { AadharDialogComponent } from '../aadhar-dialog/aadhar-dialog.component';
import { ViewDetailsComponent } from '../view-details/view-details.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule,HttpClientModule,MatButtonModule,MatIconModule,MatPaginator,MatSort,MatFormField,MatLabel,MatInput,MatInputModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  preserveWhitespaces:true
})
export class HomeComponent {
  aadharNumber!:number;
  aadhar:Aadhar[]=[];
  displayedColumns:string[]=['aadharNumber','name','address','contact','email','edit','delete','view'];
  dataSource=new MatTableDataSource<Aadhar>();
  
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private http:HttpClient,private service:HomeserviceService,private route:Router,private active:ActivatedRoute,private dialog:MatDialog,private snackBar:MatSnackBar){}
  ngOnInit():void{
   this.getAll();
  }

  getAll():void{
    this.service.getAll().subscribe((data:Aadhar[])=>{
      this.dataSource.data=data;
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

  applyFilter(event:Event):void{
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(aadhar?:Aadhar):void{
    const dialogRef=this.dialog.open(AadharDialogComponent,{
      width:'450px',
      height:'500px',
      data:aadhar?aadhar:{name:'',address:'',contact:'',email:''}
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(result.aadharNumber){
          this.service.edit(result.aadharNumber,result).subscribe(()=>{
            this.getAll();
            this.snackBar.open('AadharCart Updated Successfully','Close',{duration:10000});
          });
        }else{
          this.service.addDetails(result).subscribe(()=>{
            this.getAll();
            this.snackBar.open('AadharCart added Successfully','Close',{duration:10000});
          });
        }
      }
    });
  }

  deleteAadhar(aadharNumber:number){
    this.service.deleteId(aadharNumber).subscribe(()=>{
      this.getAll();
      this.snackBar.open('AadharCart Deleted Successfully','Close',{duration:10000});
    });
  }

  viewAadhar(aadhar:Aadhar): void {
    this.dialog.open(ViewDetailsComponent, {
      width: '500px',
      height:'450px',
      data: aadhar
    });
  }

}
