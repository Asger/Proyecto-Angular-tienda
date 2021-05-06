import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaProductosRoutingModule } from './lista-productos-routing.module';
import { ListaProductosComponent } from './lista-productos.component';
import { TablaComponent } from '../../tabla/tabla.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    ListaProductosComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    ListaProductosRoutingModule,
    MaterialModule
  ]
})
export class ListaProductosModule { }
