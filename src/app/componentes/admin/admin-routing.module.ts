import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { 
    path: '', 
    component: AdminComponent,
    children:[
      {
        path: 'productos', 
        loadChildren: () => 
        import ('../productos/lista-productos/lista-productos.module').then(
          m => m.ListaProductosModule
        )  
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
