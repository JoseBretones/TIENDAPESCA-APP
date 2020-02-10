import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';

declare var M: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductsService]
})
export class ProductComponent implements OnInit {

  productCollection : Product[] = [];
  constructor(private productService : ProductsService ) { }

  ngOnInit() {
    this.getProducts();

  }

  addProduct(form:NgForm){

    if(form.value._id){
      this.productService.editProduct(form.value)
        .subscribe(res =>{
          if(res){
             console.log(res);
          this.resetForm(form);
         M.toast({html: 'Product updated succesfully'});
          this.getProducts();
          }else{
            M.toast({html: 'Product could not be updated'});
          }
         
        });
      
    }else{

      this.productService.createProduct(form.value)
      .subscribe( res=>{
        console.log(res);
        this.resetForm(form);
        M.toast({html: `Product save succesfully`});
        this.getProducts();
      });
    }    
  }
  resetForm(form:NgForm){
    if(form){
      form.reset();
      // this.productService.selectedTeacher = new Product();
    }
  }
  getProducts(){
    this.productService.getProducts()
      .subscribe( res =>{
        this.productCollection = res as Product[];
        console.log(res);
      });
  }
  editProduct(product: Product){
    //this.productService.selectedTeacher = product;

  }
  deleteProduct(_id: String){
    if(confirm('Are you sure you want delete it?')){
      this.productService.deleteProduct(_id)
        .subscribe(res=>{
          this.getProducts();
          M.toast({html: 'Product deleted succesfully'});
        });
    }
  }
}
