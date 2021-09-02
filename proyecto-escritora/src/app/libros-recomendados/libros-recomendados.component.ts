import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

export interface Libro {
  title: string;
  subtitle: string;
  sinopsis: string;
  image?: string;
}

@Component({
  selector: 'app-libros-recomendados',
  templateUrl: './libros-recomendados.component.html',
  styleUrls: ['./libros-recomendados.component.scss']
})
export class LibrosRecomendadosComponent implements OnInit {
  libros: Libro[] | undefined;

  constructor (
    private _router: Router,
    private _ngZone: NgZone
  ) {
    this.libros = [
      {
        title: 'Drácula',
        subtitle: 'Bram Stoker',
        sinopsis: 'Novela epistolar, narración en la que se elevan distintas y apasionadas voces, intensa historia de amores y sentimientos, ejemplo indiscutible de novela gótica. El irlandés Bram Stoker no soñaba con que su libro, publicado en 1897, se convertiría en un clásico una y mil veces visitado y reinterpretado, desde Bela Lugosi a Francis Ford Coppola.<br>«Bienvenido a mi casa. Entre libremente. Pase sin temor. ¡Y deje en ella un poco de la felicidad que trae consigo!»',
        image: 'https://www.lifeder.com/wp-content/uploads/2016/06/51SuvFHaXKL._AC_US160_.jpg'
      },
      {
        title: 'Frankenstein o el Prometeo moderno',
        subtitle: 'Mary Shelley',
        sinopsis: 'Este libro cuenta la historia de Frankestein, ese cuerpo sin vida ideado por su “padre”, el cual muestra el mismo nombre. Sin duda, esta obra te atrapará desde el primer momento en el que conozcas a la criatura.',
        image: 'https://www.lifeder.com/wp-content/uploads/2016/06/518RmFJV12L._AC_US160_.jpg'
      },
      {
        title: 'Misery',
        subtitle: 'Stephen King',
        sinopsis: 'Stephen King nos cuenta la historia de un escritor que sufre un accidente. Al despertar, observa que se encuentra en una apartada casa que pertenece a una extraña mujer. A medida que avanza la trama, el protagonista verá como la locura de la mujer va en aumento.',
        image: 'https://www.lifeder.com/wp-content/uploads/2016/06/51QHoosfFfL._SL160_PIsitb-sticker-arrow-dpTopRight12-18_SH30_OU30_AC_US160_.jpg'
      },
      {
        title: 'Carrie',
        subtitle: 'Stephen King',
        sinopsis: 'Carrie se trata de una profunda y angustiosa historia de una pequeña niña que descubre una capacidad innata para desarrollar superpoderes. Lo interesante es la motivación por la cual la niña se mueve: la sed de venganza.',
        image: 'https://www.lifeder.com/wp-content/uploads/2016/06/41zsrlB5XaL._AC_US160_.jpg'
      },
      {
        title: 'Apartamento 16',
        subtitle: 'Adam Nevill',
        sinopsis: 'Historia que, como podrás intuir, ocurre dentro de un apartamento. Concretamente en el edificio Barrington en el barrio Kensington de Londres. <br>Los hechos se centran en la visita de una joven que va a reclamar la herencia de una tía abuela que a la que lleva décadas sin ver.',
        image: 'https://www.lifeder.com/wp-content/uploads/2016/06/51yzEJo0k4L._SL160_PIsitb-sticker-arrow-dpTopRight12-18_SH30_OU30_AA160_.jpg'
      }
    ]
  }

  ngOnInit(): void {
  }

  navigate(route: string[]) {
    this._ngZone.run(() => {
      this._router.navigate(route);
    });
  }

}
