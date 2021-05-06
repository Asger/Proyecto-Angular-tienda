import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Producto } from '../../models/producto.interface';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss']
})
export class EditarProductoComponent implements OnInit {
  private imagen:any;
  private imagenOriginal:any;

  @Input() producto:Producto;

  constructor(private productoSvc:ProductoService) { }

  public editarProductoForm=new FormGroup({
    id:new FormControl('', Validators.required),
    nombreProducto:new FormControl('', Validators.required),
    informacionProducto:new FormControl('', Validators.required),
    tagsProducto:new FormControl('', Validators.required),
    imagenProducto:new FormControl('', Validators.required)
  });

  ngOnInit(){
    this.imagen = this.producto.imagenProducto;
    this.imagenOriginal = this.producto.imagenProducto;
    this.iniciarValoresForm()
  }

  editarProducto(producto:Producto){
    console.log('Img', this.imagen);
    console.log('Img original', this.imagenOriginal);
    if(this.imagen === this.imagenOriginal){
      producto.imagenProducto=this.imagenOriginal;
      //llamamos al metodo 
      this.productoSvc.editarProducto(producto)
    }else{
      //llamamos al metodo, pero pasandole el (producto, this.imagen)
      this.productoSvc.editarProducto(producto, this.imagen)
    }
  }

  manejoImg(event:any): void{
    this.imagen=event.target.files[0];
  }

  private iniciarValoresForm():void{
    this.editarProductoForm.patchValue({
      id : this.producto.id,
      nombreProducto: this.producto.nombreProducto,
      informacionProducto: this.producto.informacionProducto,
      tagsProducto: this.producto.tagsProducto
    });
  }
}
