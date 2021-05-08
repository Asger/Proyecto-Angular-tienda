import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../componentes/models/producto.interface';
import { ProductoService } from '../componentes/productos/producto.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public productos$ : Observable<Producto[]>;

  constructor(private productoSvc: ProductoService) { }

  ngOnInit(){
    this.productos$ = this.productoSvc.getTodosProductos();
  }

}
