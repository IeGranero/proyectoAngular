import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesProductosService {
  public $products: BehaviorSubject<Producto[]> = new BehaviorSubject<
    Producto[]
  >([]);
  public $myCart: BehaviorSubject<Producto[]> = new BehaviorSubject<Producto[]>(
    []
  );

  constructor(private http: HttpClient) {}
  private _productosImport: Producto[] = [];
  private _productosImportSelected: Producto | null = null;

  get products(): Producto[] {
    return this._productosImport;
  }
  set products(newDatos: Producto[]) {
    this._productosImport = newDatos;
  }
  getDatoSeleccionado(): Producto | null {
    return this._productosImportSelected;
  }
  setdatos(newdatos: Producto[]) {
    this.$products.next(newdatos);
  }
  setDatoSeleccionado(newDato: Producto | null) {
    this._productosImportSelected = newDato;
  }
  getDataProduct() {
    const url = '/assets/data/datos.json';

    this.http.get<Producto[]>(url).subscribe({
      next: (response) => {
        if (!response) return;
        const firstIndex = 0;
        this.$products.next(response);

        this._productosImportSelected = response[firstIndex];
      },

      error: (error) => {},

      complete: () => {
        console.log('finish');
      },
    });
  }
  addShop(productShop: Producto[]) {
    this.$myCart.next(productShop);
  }
}
