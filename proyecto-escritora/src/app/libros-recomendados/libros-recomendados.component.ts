import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros-recomendados',
  templateUrl: './libros-recomendados.component.html',
  styleUrls: ['./libros-recomendados.component.scss']
})
export class LibrosRecomendadosComponent implements OnInit {
  libros: any | undefined;

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  goBack(): void{
    this.location.href="../app.component.html";
  }

}
