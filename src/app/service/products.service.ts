import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IProducts } from '../common/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient, private router:Router) { }

  getProducts():Observable<IProducts[]>{
    return this.http.get<IProducts[]>("http://localhost:3000/book")
  }

  getOne(id:string):Observable<IProducts>{
    return this.http.get<IProducts>("http://localhost:3000/book/"+id)
  }
}
