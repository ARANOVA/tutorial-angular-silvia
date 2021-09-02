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
        title: 'Drácula',
        subtitle: 'Bram Stoker',
        sinopsis: 'Novela epistolar, narración en la que se elevan distintas y apasionadas voces, intensa historia de amores y sentimientos, ejemplo indiscutible de novela gótica. El irlandés Bram Stoker no soñaba con que su libro, publicado en 1897, se convertiría en un clásico una y mil veces visitado y reinterpretado, desde Bela Lugosi a Francis Ford Coppola.<br>«Bienvenido a mi casa. Entre libremente. Pase sin temor. ¡Y deje en ella un poco de la felicidad que trae consigo!»',
        image: 'https://www.lifeder.com/wp-content/uploads/2016/06/51SuvFHaXKL._AC_US160_.jpg'
      },
      {
        title: 'Drácula',
        subtitle: 'Bram Stoker',
        sinopsis: 'Novela epistolar, narración en la que se elevan distintas y apasionadas voces, intensa historia de amores y sentimientos, ejemplo indiscutible de novela gótica. El irlandés Bram Stoker no soñaba con que su libro, publicado en 1897, se convertiría en un clásico una y mil veces visitado y reinterpretado, desde Bela Lugosi a Francis Ford Coppola.<br>«Bienvenido a mi casa. Entre libremente. Pase sin temor. ¡Y deje en ella un poco de la felicidad que trae consigo!»',
        image: 'https://www.lifeder.com/wp-content/uploads/2016/06/51SuvFHaXKL._AC_US160_.jpg'
      },
      {
        title: 'Drácula',
        subtitle: 'Bram Stoker',
        sinopsis: 'Novela epistolar, narración en la que se elevan distintas y apasionadas voces, intensa historia de amores y sentimientos, ejemplo indiscutible de novela gótica. El irlandés Bram Stoker no soñaba con que su libro, publicado en 1897, se convertiría en un clásico una y mil veces visitado y reinterpretado, desde Bela Lugosi a Francis Ford Coppola.<br>«Bienvenido a mi casa. Entre libremente. Pase sin temor. ¡Y deje en ella un poco de la felicidad que trae consigo!»',
        image: 'https://www.lifeder.com/wp-content/uploads/2016/06/51SuvFHaXKL._AC_US160_.jpg'
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
