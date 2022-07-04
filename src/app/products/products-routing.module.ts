import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductsComponent } from './create-products/create-products.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductByDateComponent } from './view-all-product-by-date/view-all-product-by-date.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [{ path: '', component: ProductsComponent },
{path:'create-product',component:CreateProductsComponent},
{path:'view-product',component:ViewProductComponent},
{path:'list-product',component:ViewAllProductsComponent},
{path:'search',component:ViewAllProductsByCategoryComponent},
{path:'search',component:ViewAllProductByDateComponent},
{path:'delete-product',component:DeleteProductComponent},
{path:'update-product',component:UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
