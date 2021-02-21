import { BaseRequestService } from './../../services/base-request-service.service';
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listagem-horizontal',
  templateUrl: './listagem-horizontal.page.html',
  styleUrls: ['./listagem-horizontal.page.scss'],
})
export class ListagemHorizontalPage implements OnInit, OnChanges {

  @Input() Titulo: string;
  @Input() SizeColumn: number;
  @Input() UrlBusca: string;
  @Input() QuantidadePorSlide: number;
  @Input() QuantidadeDeBuscas: number;
  @Output() Clicou = new EventEmitter();
  
  public SlideOpts = { initialSlide: 0, speed: 400 };
  public Matriz: any[] = [];
  private Cont = 1;
  private BaseUrl = "https://api.themoviedb.org/3";

  constructor(public baseRequest: BaseRequestService) { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.CarregarMatriz();
  }

  private CarregarMatriz()
  {
    this.UrlBusca = this.UrlBusca.replace("'","").replace("'","");
    this.baseRequest.Get<any>(`${this.BaseUrl}${this.UrlBusca}`, true, this.Cont).subscribe(
      retorno => {
        if (retorno)
        {
          let cont = 0;
          let filmesLinha: any[] = [];
          
          retorno.results.filter(x => x.poster_path !== null).forEach(x => {
            x.poster_path = `https://www.themoviedb.org/t/p/w500${x.poster_path}`;
            if (cont < this.QuantidadePorSlide)
            {            
              filmesLinha.push(x);
              cont++;
            }
            else
            {
              this.Matriz.push(filmesLinha);
              filmesLinha = [];
              cont = 0;
            }
          });
          this.Cont++;
          if (this.Cont <= this.QuantidadeDeBuscas)
            this.CarregarMatriz();
        }
      },
      erro => console.log(erro)
    );
  }

  getVoteAvarageColor(voteAvarage: number)
  {
    if (voteAvarage >= 7)
      return 'success';
    else if (voteAvarage > 5 && voteAvarage < 7)
      return 'warning';
    else if (voteAvarage < 5)
      return 'danger';
  }

  clicado($event)
  {
    this.Clicou.emit($event);
  }
}
