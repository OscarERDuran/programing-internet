import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Categories {
  id: string;
  nombre: string;
  categoria: string;
  valor: number;
}

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl = 'http://localhost:3000/CATEGORIES'; // URL de tu API

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Categories[]> {
    return this.http.get<Categories[]>(this.apiUrl);
  }

  deleteProduct(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  createProduct(product: Categories): Observable<Categories> {
    return this.http.post<Categories>(this.apiUrl, product);
  }
  
  updateProduct(id: string, product: Categories): Observable<Categories> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Categories>(url, product);
  }
}
