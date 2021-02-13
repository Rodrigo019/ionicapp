import { FilmeFiltro } from './../../models/filme/filmefiltro';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  FilmeFiltro: FilmeFiltro = new FilmeFiltro();
  titulo: string = 'aaa';

  constructor(public navParams: NavParams, public modalCtrl: ModalController) { }

  ngOnInit() {}

  closeModal() 
  {
    this.modalCtrl.dismiss({
      'filtro': this.titulo
    });
  }
}
