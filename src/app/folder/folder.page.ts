import { Filme } from './../models/filme/filme';
import { FilmeService } from './../services/filme/filme.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  
  public ImagemFundoPrincipal: string;
  public ImagemPrincipal: string;

  constructor(private filmeService: FilmeService) { }
  
  ngOnInit(): void {
    this.buscarFilmeNoCinema();
  }

  buscarFilmeNoCinema()
  {
    this.filmeService.BuscarFilmesNoCinema(true).subscribe(
      retorno => {
        let primeiro = retorno.results.shift();
        // this.ImagemFundoPrincipal = `https://www.themoviedb.org/t/p/w500${primeiro.backdrop_path}`;
        this.ImagemFundoPrincipal = `https://www.themoviedb.org/t/p/w500${primeiro.poster_path}`;
        this.ImagemPrincipal = `https://www.themoviedb.org/t/p/w500${primeiro.poster_path}`;
      },
      erro => console.log(erro)
    );
  }

  getbackgroundImage()
  {
    return `url(${this.ImagemFundoPrincipal})`;
  }
}
