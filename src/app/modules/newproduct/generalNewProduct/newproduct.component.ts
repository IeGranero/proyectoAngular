import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/interfaces/producto';
import { ServicesProductosService } from 'src/app/services/services-productos.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.scss'],
})
export class NewproductComponent implements OnInit {
  userForm: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required]],
    price: [
      null,
      [Validators.required, Validators.min(1), Validators.max(999)],
    ],
    description: [null, [Validators.required, Validators.maxLength(250)]],
    checkFavorite: [false],
    checkSimilar: [false],
  });

  formValue: any;
  productServices: Producto[] = [];
  resultado!: string;
  pSeleccion: Producto = this.productServices[0];
  constructor(
    private formBuilder: FormBuilder,
    private servicesProductosService: ServicesProductosService
  ) {}

  ngOnInit(): void {
    this.servicesProductosService.$products.subscribe({
      next: (response) => {
        this.productServices = response;
        this.pSeleccion = this.productServices[0];
      },
    });
  }

  sendUserInfo() {
    this.formValue = this.userForm.value;
    const newProductGenerate = this.formValue;
    //this.servicesProductosService.funcionañadirenelservicio
  }
  validateField(field: string): boolean {
    return (
      this.userForm.controls[field].invalid &&
      this.userForm.controls[field].touched
    );
  }
  submit() {
    if (this.userForm.valid) {
      this.resultado = 'Todos los datos son válidos';
    } else {
      this.resultado = 'Hay datos inválidos en el formulario';
    }
  }
}
