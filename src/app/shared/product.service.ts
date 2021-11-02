import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getData(id:any){
    return this.http.get<any>("https://fakestoreapi.com/products"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
