import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-ficha',
  templateUrl: './productos-ficha.component.html',
  styleUrls: ['./productos-ficha.component.sass']
})
export class ProductosFichaComponent implements OnInit {
  identificador: any;
  constructor(private ruta: ActivatedRoute) {
   }

  ngOnInit() {
    this.identificador = this.ruta.snapshot.params['id'];

  }

}
