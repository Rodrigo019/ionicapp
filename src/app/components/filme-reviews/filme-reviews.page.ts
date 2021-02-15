import { ModalFilmeReviewsPage } from './../modal-filme-reviews/modal-filme-reviews.page';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filme-reviews',
  templateUrl: './filme-reviews.page.html',
  styleUrls: ['./filme-reviews.page.scss'],
})
export class FilmeReviewsPage implements OnInit {

  @Input() FilmeId: number;

  constructor(
    protected modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async presentModal(event) {
    let modal = this.modalController.create({
      component: ModalFilmeReviewsPage,
      componentProps: { 'FilmeId': this.FilmeId }
    });

    return (await modal).present();
  }
}
