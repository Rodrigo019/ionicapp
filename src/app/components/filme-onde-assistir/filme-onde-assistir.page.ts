import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalOndeAssistirFilmePage } from '../modal-onde-assistir-filme/modal-onde-assistir-filme.page';

@Component({
  selector: 'app-filme-onde-assistir',
  templateUrl: './filme-onde-assistir.page.html',
  styleUrls: ['./filme-onde-assistir.page.scss'],
})
export class FilmeOndeAssistirPage implements OnInit {

  @Input() FilmeId: number;
  @Input() FilmeNome: string;
  @Input() HomePage: string;

  constructor(
    protected modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async presentModal(event) {
    let modal = this.modalController.create({
      component: ModalOndeAssistirFilmePage,
      componentProps: { 
        'FilmeId': this.FilmeId, 
        'FilmeNome': this.FilmeNome, 
        'HomePage': this.HomePage 
      }
    });

    return (await modal).present();
  }

}
