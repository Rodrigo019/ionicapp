import { Cast } from './../../models/filme/cast';
import { FilmeService } from './../../services/filme/filme.service';
import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme-elenco-principal',
  templateUrl: './filme-elenco-principal.page.html',
  styleUrls: ['./filme-elenco-principal.page.scss'],
})
export class FilmeElencoPrincipalPage implements OnInit, OnChanges {

  @Input() FilmeId: number;
  private Cast: Cast[]; 

  constructor(
    private filmeService: FilmeService
  ) {  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.teste();
  }

  teste() {
    if (this.FilmeId !== undefined){
      this.filmeService.BuscaCreditos(this.FilmeId, true).subscribe(
        retorno => {
          console.log(retorno);
          this.Cast = retorno.cast.slice(0, 5);
          this.Cast.forEach(x => x.profile_path = `https://www.themoviedb.org/t/p/original${x.profile_path}`);
          console.log(this.Cast);
        },
        erro => console.log(erro)
      );
    }
  }
}
