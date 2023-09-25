import { Component } from '@angular/core';
import { IProducts } from 'src/app/common/products';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  product:IProducts[]=[]
  constructor(private proSrv: ProductsService) { }
  ngOnInit(): void{
    this.proSrv.getProducts().subscribe(data=>{
      this.product =data
    })
  }
}
