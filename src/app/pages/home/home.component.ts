import { Component } from '@angular/core';
import { IProducts } from 'src/app/common/products';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  product:IProducts[]=[]
  constructor(private proSrv: ProductsService) { }
  ngOnInit(): void{
    this.proSrv.getProducts().subscribe(data=>{
      this.product =data
    })
  }
}
