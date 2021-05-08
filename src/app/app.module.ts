import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

import { ContainerAppComponent } from './componentes/container-app/container-app.component';
import { NuevoProductoComponent } from './componentes/productos/nuevo-producto/nuevo-producto.component';
import { NuevoProductoModule } from './componentes/productos/nuevo-producto/nuevo-producto.module';

//Firebase storage y autenticación 
//storage
import {AngularFirestoreModule} from '@angular/fire/firestore' 
import {AngularFireStorageModule, BUCKET } from '@angular/fire/storage';



//autenticación
//Importo los formularios
import { ReactiveFormsModule } from '@angular/forms';

//Este me sirve para iniciar la conexion con firebase
import { AngularFireModule } from '@angular/fire';

//Importo el modulo que me permite trabajar con las autenticaciones

import {AngularFireAuthModule} from '@angular/fire/auth'

//Importo el environment que tiene los datos de configuración del proyecto firebase
import { environment } from 'src/environments/environment';

//Angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ModalComponent } from './componentes/modal/modal.component';
import { EditarProductoComponent } from './componentes/productos/editar-producto/editar-producto.component';
import { EditarProductoModule } from './componentes/productos/editar-producto/editar-producto.module';
import { DetallesProductosComponent } from './componentes/productos/detalles-productos/detalles-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerAppComponent,
    NuevoProductoComponent,
    ModalComponent,
    EditarProductoComponent,
    DetallesProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    NuevoProductoModule,
    BrowserAnimationsModule,
    MaterialModule,
    EditarProductoModule
  ],
  entryComponents:[
    ModalComponent
  ],
  providers: [
    {provide: BUCKET, useValue:'gs://autenticacion-angular-5dfd2.appspot.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
