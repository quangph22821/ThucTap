import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LayoutAdminComponent } from './admin/layout-admin/layout-admin.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { UpdateProductsComponent } from './admin/pages/update-products/update-products.component';
import { AddProductsComponent } from './admin/pages/add-products/add-products.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },

    ]
  },
  {
    path: "admin",
    component: LayoutAdminComponent,
    children: [
      {
        path: "", component: DashboardComponent
      },
      {
        path: "add", component:AddProductsComponent
      },
      {
        path: "update/:id", component: UpdateProductsComponent
      }
    ]
  },
  {
    path: "detail/:id",
    component: DetailComponent
  },
  {
    path: "**",
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
