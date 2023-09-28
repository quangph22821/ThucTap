import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.scss']
})
export class UpdateProductsComponent implements OnInit {
  submit=false;
  constructor(private prodSrv:ProductsService , private router: Router, private route:ActivatedRoute ) { }
  productFormEdit: FormGroup = new FormGroup({
    name: new FormControl("",Validators.required),
    price: new FormControl("",Validators.required),
    img: new FormControl("",Validators.required),
    author:new FormControl("",Validators.required),
    desc: new FormControl("",[Validators.required, Validators.minLength(10)])
  });
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.prodSrv.getOne(id).subscribe(data => {
      this.productFormEdit = new FormGroup({
        name: new FormControl(data.name,Validators.required),
        price: new FormControl(data.price,Validators.required),
        img: new FormControl(data.img,Validators.required),
        author:new FormControl(data.author,Validators.required),
        desc:new FormControl(data.desc,[Validators.required, Validators.minLength(10)])
      });
      
     });
     
  }
  get sub (){
    return this.productFormEdit.controls
  }
  onUpdate(){
    this.submit = true;
    console.log(this.productFormEdit.invalid);
    
    if(this.productFormEdit.invalid){
      return;
    }
    this.prodSrv.updateProducts(this.productFormEdit.value,this.route.snapshot.params['id']).subscribe(data => {
      console.log(data);
      this.router.navigate(['admin'])
    })
    
  }
}
