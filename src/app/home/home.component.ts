import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../componentes/productos/producto.service';
import { Producto } from '../componentes/models/producto.interface';
import { Observable } from 'rxjs';

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
