import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ProductoService } from '../productos/producto.service';
import { Producto } from '../models/producto.interface';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
//SweetAlert2
import Swal from 'sweetalert2';

//tabla con filtros

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nombreProducto', 'tagsProducto', 'acciones'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true})paginator: MatPaginator;
  @ViewChild(MatSort, {static:true}) sort: MatSort;

  constructor(private productoSvc: ProductoService, public dialog:MatDialog) { }

  ngOnInit(){
    this.productoSvc.getTodosProductos().subscribe(productos => (this.dataSource.data=productos));
  }

  ngAfterViewInit(){
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEditarProducto(producto:Producto){
    console.log('Editar producto', producto);
    this.openDialog(producto);
  }

  onEliminarProducto(producto:Producto){
    Swal.fire({
      title:'Estas seguro?',
      text:'No podrás revertir esto!',
      icon: 'warning',
      showCancelButton:true,
      confirmButtonColor:'#300321',
      cancelButtonColor:'#d33',
      confirmButtonText:'Si, elimínalo'
    }).then(result => {
      if(result.value){
        //Quiere borrar
        this.productoSvc.eliminarProductoId(producto).then(()=>{
          Swal.fire('Eliminado!', 'El producto ha sido eliminado', 'success');
        }).catch((error)=>{
          Swal.fire('Error!', 'Algo salió mal', 'error');
        })  
      }
    })
  }

  onNuevoProducto(){
    this.openDialog();
  }

  openDialog(producto?:Producto):void{
    const configuracion={
      data:{
        message:producto ? 'Editar producto' : 'Crear producto',
        content:producto
      }
    }
    const dialogRef = this.dialog.open(ModalComponent,configuracion);
    dialogRef.afterClosed().subscribe(resultado => {
      console.log(`Resultado ${resultado}`);
    })
  }
}

