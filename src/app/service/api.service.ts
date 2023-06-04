import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{map}from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseurl="https://fakestoreapi.com/products"
  constructor(private http:HttpClient) { }

  getproduct(){
    return this.http.get<any>(this.baseurl).pipe(map((res)=>{
      return res;
    }))
  }
}
