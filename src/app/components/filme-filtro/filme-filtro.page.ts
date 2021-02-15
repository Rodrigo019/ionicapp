import { Filme } from 'src/app/models/filme/filme';
import { ModalFiltroFilmePage } from './../modal-filtro-filme/modal-filtro-filme.page';
import { FilmeFiltro } from './../../models/filme/filmefiltro';
import { PopoverComponent } from './../popover/popover.component';
import { FilmeService } from './../../services/filme/filme.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core'

@Component({
  selector: 'app-filme-filtro',
  templateUrl: './filme-filtro.page.html',
  styleUrls: ['./filme-filtro.page.scss'],
})
export class FilmeFiltroPage implements OnInit {

  @Input() Filmes: Filme[] = [];
  @Output() FilmesEmmiter = new EventEmitter<Filme[]>();
  FilmeFiltro: FilmeFiltro = new FilmeFiltro();  
  FilmesFiltrados: Filme[] = [];

  constructor(
    protected modalController: ModalController
    ) { }

  ngOnInit() {
  }

  async presentModal(event) {
    let modal = this.modalController.create({
      component: ModalFiltroFilmePage,
    });
    
    (await modal).onDidDismiss().then((retorno: OverlayEventDetail<FilmeFiltro>) => {
      console.log(retorno);
      if (retorno.data !== undefined)
      {
        this.FilmeFiltro.titulo = retorno.data.titulo;
        this.filtrarFilmes();
        this.FilmesEmmiter.emit(this.FilmesFiltrados);       
      }
    });

    return (await modal).present();
  }

  filtrarFilmes() 
  {
    if (this.FilmeFiltro.titulo)
      this.FilmesFiltrados = this.Filmes.filter(x => x.title.toLowerCase().indexOf(this.FilmeFiltro.titulo.toLowerCase()) > -1);
  }
}
