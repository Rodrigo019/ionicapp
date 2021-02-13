import { FilmeService } from './../../services/filme/filme.service';
import { Filme } from 'src/app/models/filme/filme';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filme-filtro',
  templateUrl: './filme-filtro.page.html',
  styleUrls: ['./filme-filtro.page.scss'],
})
export class FilmeFiltroPage implements OnInit {

  @Output() FilmesEmmiter = new EventEmitter<Filme[]>();

  FilmesFiltrados: Filme[] = [];  

  constructor(protected filmeService: FilmeService) { }

  ngOnInit() {
  }

  filtrar()
  {
    
    this.FilmesEmmiter.emit(this.FilmesFiltrados);
  }
}
