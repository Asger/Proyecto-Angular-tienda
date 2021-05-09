import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductoComponent } from '../componentes/productos/producto/producto.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    HomeComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
