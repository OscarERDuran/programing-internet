
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,  CategoriesListComponent], // Importa ProductListComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ecommerce_frontend';
}
