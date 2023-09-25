import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import { HeaderComponent } from './components/header/header.component';

import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './pages/detail/detail.component';
import { SalesComponent } from './pages/sales/sales.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LayoutAdminComponent } from './admin/layout-admin/layout-admin.component';
import { ListproductComponent } from './admin/pages/listproduct/listproduct.component';
import { AddProductsComponent } from './admin/pages/add-products/add-products.component';
import { UpdateProductsComponent } from './admin/pages/update-products/update-products.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HeaderAdminComponent } from './admin/components/header-admin/header-admin.component';
import { FooterAdminComponent } from './admin/components/footer-admin/footer-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,

    HeaderComponent,

    FooterComponent,
    BannerComponent,
    HomeComponent,
    ContactComponent,
    DetailComponent,
    SalesComponent,
    NotfoundComponent,
    LayoutAdminComponent,
   
    ListproductComponent,
        AddProductsComponent,
        UpdateProductsComponent,
        DashboardComponent,
        HeaderAdminComponent,
        FooterAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
