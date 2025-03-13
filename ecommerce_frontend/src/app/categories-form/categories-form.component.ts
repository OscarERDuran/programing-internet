import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; // Importa MAT_DIALOG_DATA
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriesService, Categories } from '../services/categories.service';

@Component({
  selector: 'app-categories-form',
  standalone: true,
  imports: [FormsModule], // Importa FormsModule
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css'],
})
export class CategoriesFormComponent {
  isEditMode: boolean = false; // Indica si el formulario está en modo edición
  product: Categories = {
    id: '',
    nombre: '',
    categoria: '',
    valor: 0,
  };

  constructor(
    private categoriesService: CategoriesService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<CategoriesFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: Categories } // Recibe los datos del producto a editar
  ) {
    if (data && data.product) {
      this.isEditMode = true; // Activa el modo edición
      this.product = { ...data.product }; // Copia los datos del producto
    }
  }

  // Método para guardar el producto
  onSubmit(): void {
    if (this.isEditMode) {
      this.categoriesService.updateProduct(this.product.id, this.product).subscribe({
        next: () => {
          this.snackBar.open('Producto actualizado correctamente', 'Cerrar', {
            duration: 3000,
          });
          this.dialogRef.close(true); // Cierra el modal y devuelve true
        },
        error: (err) => {
          this.snackBar.open('Error al actualizar el producto', 'Cerrar', {
            duration: 3000,
          });
          console.error(err);
        },
      });
    } else {
      this.categoriesService.createProduct(this.product).subscribe({
        next: () => {
          this.snackBar.open('Producto creado correctamente', 'Cerrar', {
            duration: 3000,
          });
          this.dialogRef.close(true); // Cierra el modal y devuelve true
        },
        error: (err) => {
          this.snackBar.open('Error al crear el producto', 'Cerrar', {
            duration: 3000,
          });
          console.error(err);
        },
      });
    }
  }

  // Método para cerrar el modal sin guardar
  onCancel(): void {
    this.dialogRef.close(false); // Cierra el modal y devuelve false
  }
}