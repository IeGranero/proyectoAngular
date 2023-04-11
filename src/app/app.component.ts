import { Component } from '@angular/core';
import { ServicesProductosService } from './services/services-productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ProyectoInicial';

  constructor(public dataService: ServicesProductosService) {}
  ngOnInit(): void {
    this.dataService.getDataProduct();
  }
}
