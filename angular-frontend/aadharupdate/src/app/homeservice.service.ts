import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aadhar } from './aadhar';
import { Observable } from 'rxjs';
import { ReponseMessage } from './ResponseMessages/reponse-message';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

  constructor(private http:HttpClient) { }

  private baseURL='http://localhost:8080/aadhar';
  aadhar:Aadhar=new Aadhar();

  getAll():Observable<any>{
    return this.http.get(`${this.baseURL}/all`);
  }

  getById(aadharNumber:number):Observable<Aadhar>{
    return this.http.get<Aadhar>(`${this.baseURL}/findById/${aadharNumber}`);

  }

  addDetails(aadhar:Aadhar):Observable<ReponseMessage>{
   return this.http.post<ReponseMessage>(`${this.baseURL}/addDetails`,aadhar);
  }

  deleteId(aadharNumber:number){
    return this.http.delete(`${this.baseURL}/delete/${aadharNumber}`);
  }

  edit(aadharNumber:number,aadhar:Aadhar):Observable<Aadhar>{
    return this.http.put<Aadhar>(`${this.baseURL}/update/${aadharNumber}`,aadhar);
  }
}
