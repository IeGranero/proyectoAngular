import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '2 Proyecto';
  prodJson = [
    {
      id: 0,
      product: 'Tomaco',
      price: 1000,
      currency: '€',
      rating: 4.8,
      image: '../assets/images/2proyecto/tomaco.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
      similarProducts: [
        {
          image: '../assets/images/2proyecto/cafaina.png',
          product: 'Cafaina',
          price: 4000,
          currency: '$',
          rating: 2.8,
          description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
        },
        {
          image: '../assets/images/2proyecto/duff.jpg',
          product: 'Energy Milk',
          price: 200,
          currency: '€',
          rating: 3.5,
          description:
            'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
        },
        {
          image: '../assets/images/2proyecto/tegridad.jfif',
          product: 'Tegridad',
          price: 2500,
          currency: '€',
          rating: 5,
          description:
            'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.',
        },
      ],
      reviews: [
        {
          image: '../assets/images/2proyecto/h.png',
          name: 'Homer J. Simpson',
          raging: 5,
          opinion:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          date: 'Ayer por la tarde, 2023',
        },
        {
          image: '../assets/images/2proyecto/m.png',
          name: 'Marge Simpson',
          raging: 4,
          opinion:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
          date: 'La semana pasada, 2023',
        },
      ],
    },
    {
      id: 1,
      product: 'Cafaina',
      price: 4000,
      currency: '$',
      rating: 2.8,
      image: '../assets/images/2proyecto/cafaina.png',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
      similarProducts: [
        {
          image: '../assets/images/2proyecto/duff.jpg',
          product: 'Energy Milk',
          price: 200,
          currency: '€',
          rating: 3.5,
          description:
            'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
        },
        {
          image: '../assets/images/2proyecto/tegridad.jfif',
          product: 'Tegridad',
          price: 2500,
          currency: '€',
          rating: 5,
          description:
            'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.',
        },
        {
          image: '../assets/images/2proyecto/tomaco.jpg',
          product: 'Tomaco',
          price: 1000,
          currency: '€',
          rating: 4.8,
          description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
        },
      ],
      reviews: [
        {
          image: '../assets/images/2proyecto/b.png',
          name: 'Bart Simpson',
          raging: 5,
          opinion:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          date: 'Ayer por la tarde, 2023',
        },
        {
          image: '../assets/images/2proyecto/l.png',
          name: 'Lisa Simpson',
          raging: 2,
          opinion:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
          date: 'La semana pasada, 2023',
        },
      ],
    },
    {
      id: 2,
      product: 'Tegridad',
      price: 2500,
      currency: '€',
      rating: 5,
      image: '../assets/images/2proyecto/tegridad.jfif',
      description:
        'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.',
      similarProducts: [
        {
          image: '../assets/images/2proyecto/duff.jpg',
          product: 'Energy Milk',
          price: 200,
          currency: '€',
          rating: 3.5,
          description:
            'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
        },
        {
          image: '../assets/images/2proyecto/tomaco.jpg',
          product: 'Tomaco',
          price: 1000,
          currency: '€',
          rating: 4.8,
          description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
        },
      ],
      reviews: [
        {
          image: '../assets/images/2proyecto/b.png',
          name: 'Bart Simpson',
          raging: 1,
          opinion:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          date: 'Ayer por la tarde, 2023',
        },
        {
          image: '../assets/images/2proyecto/l.png',
          name: 'RLisa Simspon',
          raging: 5,
          opinion:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
          date: 'primer día, 2023',
        },
      ],
    },
    {
      id: 3,
      product: 'Energy Milk',
      price: 200,
      currency: '€',
      rating: 3.5,
      image: '../assets/images/2proyecto/duff.jpg',
      description:
        'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
      similarProducts: [],
      reviews: null,
    },
  ];
  pSeleccion = this.prodJson[0];
  productoFiltrado = this.prodJson;
  filtrado = '';

  listaProductos(product: any) {
    this.pSeleccion = product;
  }

  filtrarNombre() {
    this.productoFiltrado = this.prodJson.filter((nombre) =>
      nombre.product.toLowerCase().includes(this.filtrado.toLowerCase())
    );
  }
  reset() {
    this.productoFiltrado = this.prodJson;
    this.filtrado = '';
  }
  prodEstrella = this.prodJson[0];
  estrellaYellow = Array(5).fill(true);

  buttonClicked(index: number) {
    for (let i = 0; i < this.prodJson.length; i++) {
      if (index == this.productoFiltrado[i].id) {
        this.prodEstrella = this.productoFiltrado[i];
      }
    }
  }

  eliminar(id: number) {
    for (let i = 0; i < this.productoFiltrado.length; i++) {
      if (id == this.productoFiltrado[i].id) {
        this.productoFiltrado.splice(i, 1);
        this.pSeleccion = this.prodJson[0];
      }
    }
  }
}
