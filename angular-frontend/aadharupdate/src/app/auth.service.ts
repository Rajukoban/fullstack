import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private validEmail='r@gmail.com';
  private validAadharNumber=12345678;

  constructor() { }

  login(email:string,aadharNumber:number):Observable<boolean>{
    const isValid= email==this.validEmail && aadharNumber==this.validAadharNumber;
    return of(isValid).pipe(delay(500));
  }
}
