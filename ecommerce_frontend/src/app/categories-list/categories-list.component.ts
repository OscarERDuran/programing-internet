import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService, Categories } from '../services/categories.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; // Importa MatDialog
import { CategoriesFormComponent } from '../categories-form/categories-form.component'; // Importa el formulario

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    CategoriesFormComponent, // Importa el componente del formulario
  ],
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
})
export class CategoriesListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'categoria', 'valor', 'acciones'];
  dataSource = new MatTableDataSource<Categories>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private categoriesService: CategoriesService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog // Inyecta MatDialog
  ) {}

  
  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.categoriesService.getProducts().subscribe((data) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  eliminarProducto(id: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.categoriesService.deleteProduct(id).subscribe({
        next: () => {
          this.snackBar.open('Producto eliminado correctamente', 'Cerrar', {
            duration: 3000,
          });
          this.cargarProductos();
        },
        error: (err) => {
          this.snackBar.open('Error al eliminar el producto', 'Cerrar', {
            duration: 3000,
          });
          console.error(err);
        },
      });
    }
  }

    // Método para abrir el modal de editar producto
    editarProducto(product: Categories): void {
      const dialogRef = this.dialog.open(CategoriesFormComponent, {
        width: '400px', // Ancho del modal
        data: { product }, // Pasa el producto a editar
      });

      // Escucha el resultado del modal
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.cargarProductos(); // Recargar la lista de productos si se actualizó un producto
        }
      });
    }

  // Método para manejar la creación de un nuevo producto
  onProductCreated(): void {
    this.cargarProductos(); // Recargar la lista de productos
  }

  // Método para abrir el modal de agregar producto
openAddProductDialog(): void {
  const dialogRef = this.dialog.open(CategoriesFormComponent, {
    width: '400px', // Ancho del modal
  });

  // Escucha el resultado del modal
  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      this.cargarProductos(); // Recargar la lista de productos si se creó un producto
    }
  });
}
}


