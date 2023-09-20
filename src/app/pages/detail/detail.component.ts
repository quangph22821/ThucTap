import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from 'src/app/common/products';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  product!:IProducts
  constructor(private proSrv: ProductsService, private activeRoute:ActivatedRoute){}
  ngOnInit(): void{
    const id = this.activeRoute.snapshot.params['id']
    console.log(id);
    
    this.proSrv.getOne(id).subscribe(data=>{
      this.product =data
    })
  }
}
