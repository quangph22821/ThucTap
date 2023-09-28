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

  getProducts(search:any =null):Observable<IProducts[]>{
    let url = "http://localhost:3000/book"
    if(search !=null){
      url += "?name_like=" +search
      
    }
    return this.http.get<IProducts[]>("http://localhost:3000/book")
  }

  getOne(id:string):Observable<IProducts>{
    return this.http.get<IProducts>("http://localhost:3000/book/"+id)
  }

  addProducts(body:any):Observable<IProducts>{
    return this.http.post<IProducts>("http://localhost:3000/book/",body)
  }

  updateProducts(body:any,id:string):Observable<IProducts[]>{
    return this.http.put<IProducts[]>("http://localhost:3000/book/"+id,body)
  }

  delete(id:string):Observable<IProducts>{
    return this.http.delete<IProducts>("http://localhost:3000/book/"+id)
  }
}
