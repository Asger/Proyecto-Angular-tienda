import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Producto } from '../../models/producto.interface';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  public producto$: Observable<Producto>;

  constructor(private route:ActivatedRoute, private productoSvc:ProductoService) { }

  ngOnInit(){
    const idProdcuto = this.route.snapshot.params.id;
    this.producto$ = this.productoSvc.getUnProducto(idProdcuto);
  }

}
