import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IProducts } from 'src/app/common/products';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  product: IProducts[] = []
  searchForm: FormGroup = new FormGroup({
    name: new FormControl()
 
  });
  constructor(private proSrv: ProductsService) { }
  ngOnInit(): void {
    this.proSrv.getProducts().subscribe(data => {
      this.product = data
    })
  }

  onDelete(id: string) {
    if (confirm("Bạn có muốn xóa không")) {
      this.proSrv.delete(id).subscribe(data => {
        this.proSrv.getProducts().subscribe(data => {
          this.product = data;
        })
      })
    }
  }

  onEdit(product: any ){

  }
  onSearch(){
    // alert(this.searchForm.value.name)
    this.proSrv.getProducts(this.searchForm.value.name).subscribe(data => {
      this.product = data;
    })
  }
}
