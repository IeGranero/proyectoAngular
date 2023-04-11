import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.scss'],
})
export class NewproductComponent {
  userForm: FormGroup = this.formBuilder.group({
    name: [null, Validators.required],
    price: [null, Validators.required],
    description: [null, Validators.required],
    checkFavorite: [Validators.required],
  });

  formValue: any;

  constructor(private formBuilder: FormBuilder) {}

  sendUserInfo() {
    this.formValue = this.userForm.value;
  }
  validateField(field: string): boolean {
    return (
      this.userForm.controls[field].invalid &&
      this.userForm.controls[field].touched
    );
  }
}
