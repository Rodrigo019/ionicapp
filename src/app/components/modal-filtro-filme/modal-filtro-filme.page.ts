import { FilmeFiltro } from './../../models/filme/filmefiltro';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './modal-filtro-filme.page.html',
  styleUrls: ['./modal-filtro-filme.page.scss'],
})
export class ModalFiltroFilmePage implements OnInit {

  FilmeFiltro: FilmeFiltro = new FilmeFiltro();

  constructor(public navParams: NavParams, public modalCtrl: ModalController) { }

  ngOnInit() {}

  filtrar() 
  {
    this.modalCtrl.dismiss({
      'titulo': this.FilmeFiltro.titulo
    });
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
