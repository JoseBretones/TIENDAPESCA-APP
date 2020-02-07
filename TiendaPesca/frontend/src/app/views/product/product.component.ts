import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productCollection : Product[] = [];
  constructor(private productService : ProductsService , private toast : ToastrService) { }

  ngOnInit() {
    this.getProducts();

  }

  addTeacher(form:NgForm){

    if(form.value._id){
      this.productService.editProduct(form.value)
        .subscribe(res =>{
          if(res){
             console.log(res);
          this.resetForm(form);
          this.toast.success('Product updated succesfully','Success');
          this.getProducts();
          }else{
            this.toast.error('Product could not be updated','Error');
          }
         
        });
      
    }else{

      this.productService.createProduct(form.value)
      .subscribe( res=>{
        console.log(res);
        this.resetForm(form);
        this.toast.success(`Product save succesfully`,'Success');
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
  editTeacher(product: Product){
    //this.productService.selectedTeacher = product;

  }
  deleteTeacher(_id: String){
    if(confirm('Are you sure you want delete it?')){
      this.productService.deleteProduct(_id)
        .subscribe(res=>{
          this.getProducts();
          this.toast.success('Product deleted succesfully','Success');
        });
    }
  }
}
