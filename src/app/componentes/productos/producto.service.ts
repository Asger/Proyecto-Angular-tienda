import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators'
import { Img } from '../models/img.interface';
import { Producto } from '../models/producto.interface'

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productosColeccion:AngularFirestoreCollection<Producto>;
  private filePath:any;
  private downloadURL:Observable<string>;

  constructor(private afs: AngularFirestore, private storage:AngularFireStorage) { 
    this.productosColeccion = afs.collection<Producto>('Productos');
  }

  public getTodosProductos():Observable<Producto[]>{
    return this.productosColeccion
    .snapshotChanges()
    .pipe(
      map(acciones => 
        acciones.map(a => {
          const data = a.payload.doc.data() as Producto;
          const id = a.payload.doc.id;
          return { id, ...data }
        })
        )
    )
  }

  public getUnProducto(id:Producto):Observable<Producto>{
    return this.afs.doc<Producto>(`Productos/${id}`).valueChanges();
  }

  public eliminarProductoId(producto:Producto){
    return this.productosColeccion.doc(producto.id).delete();
    
  }

  public editarProducto(producto:Producto, nuevaImagen?:Img){
    if(nuevaImagen){
      this.uploadImagen(producto, nuevaImagen);
    }else{
      return this.productosColeccion.doc(producto.id).update(producto);
    }
  }

  public preCrearYActualizarProducto(producto:Producto, imagen:Img):void{
    this.uploadImagen(producto,imagen);
  }

  public guardarProducto(producto:Producto){
    const productoObjeto={
      nombreProducto: producto.nombreProducto,
      informacionProducto: producto.informacionProducto,
      imagenProducto: this.downloadURL,
      fileRef: this.filePath,
      tagsProducto: producto.tagsProducto
    };
    //Esto evalua si tiene o no id, para añardir o actualizar el producto
    if(producto.id){
      return this.productosColeccion.doc(producto.id).update(productoObjeto);
    }else{
      return this.productosColeccion.add(productoObjeto);
    }
  }

  private uploadImagen(producto:Producto, imagen:Img){
    this.filePath = `imagenes/${imagen.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, imagen);
    task.snapshotChanges()
    .pipe(
      finalize(()=>{
        fileRef.getDownloadURL().subscribe(urlImagen=>{
          this.downloadURL = urlImagen;
          //metodo para guardar el producto en firebase
          this.guardarProducto(producto);

        })
      })
    ).subscribe();
  }

  
}
