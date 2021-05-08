import { Component, OnInit , Input} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoService } from '../producto.service';
import { Producto } from '../../models/producto.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  //public productos$ : Observable<Producto[]>;

  @Input() producto:Producto;
  constructor(private productoSvc: ProductoService) { }

  ngOnInit(){
    //this.productos$ = this.productoSvc.getTodosProductos();
  }
}
