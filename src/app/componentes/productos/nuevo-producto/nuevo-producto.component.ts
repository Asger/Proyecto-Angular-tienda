import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Producto } from '../../models/producto.interface';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.scss']
})
export class NuevoProductoComponent implements OnInit {

  private imagen:any;

  constructor(private productoSvc:ProductoService) { }

  public nuevoProductoForm = new FormGroup({
    nombreProducto: new FormControl('', Validators.required),
    informacionProducto: new FormControl('', Validators.required),
    tagsProducto: new FormControl('', Validators.required),
    imagenProducto: new FormControl('', Validators.required)
  }) 

  ngOnInit(){
  }

  addNewPost(data:Producto){
    console.log('Nuevo Producto', data);
    this.productoSvc.preCrearYActualizarProducto(data, this.imagen)
  }

  manejoImg(event:any): void{
    this.imagen = event.target.files[0];
  }
}
