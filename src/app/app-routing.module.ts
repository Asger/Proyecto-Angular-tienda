import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerAppComponent } from './componentes/container-app/container-app.component';
import { ProductoComponent } from './componentes/productos/producto/producto.component';

const routes: Routes = [
  {
    path:'', component:ContainerAppComponent,
    children:[
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
      { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }, 
      { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
      { path: 'upload-image', loadChildren: () => import('./componentes/upload-image/upload-image.module').then(m => m.UploadImageModule) },
      {
        path:'', redirectTo: '/home', pathMatch: 'full'
      },
      {
        path:'producto/:id', component:ProductoComponent
      }
    ]
  },
  { path: 'admin', loadChildren: () => import('./componentes/admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
