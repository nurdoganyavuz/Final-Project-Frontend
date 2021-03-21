import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  //yöneteceğimiz dataları her zaman burada tanımlarız. Çünkü html bunlar üzerinden ilerlicek.
  categories : Category[] = [];
  currentCategory : Category | null; //arkaplanda newlenip instance'ının olusturulması gerekiyor. Bu yüzden tsconfig dosyasına gerekli kodu eklememiz gerekir.

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categories = response.data;
    })
    
  }
  setCurrentCategory(category:Category){
    this.currentCategory = category;
  }
  setAllCategoryNull(){
    this.currentCategory = null //"tüm ürünler" sekmesini seçtiğimizde currentcategory sıfırlansın istiyoruz.
  }
  getCurrentCategoryClass(category:Category){
    if(category == this.currentCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getAllCategoryClass(){
    if(!this.currentCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

}
