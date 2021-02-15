import { ModalFilmeCreditosPage } from './../modal-filme-creditos/modal-filme-creditos.page';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filme-creditos',
  templateUrl: './filme-creditos.page.html',
  styleUrls: ['./filme-creditos.page.scss'],
})
export class FilmeCreditosPage implements OnInit {

  @Input() FilmeId: number;
  
  constructor(
    protected modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async presentModal(event) {
    let modal = this.modalController.create({
      component: ModalFilmeCreditosPage,
      componentProps: { 'FilmeId': this.FilmeId }
    });

    return (await modal).present();
  }

}
