import { RetornoReviews } from 'src/app/models/filme/retornoreviews';
import { ModalController, NavParams } from '@ionic/angular';
import { FilmeService } from './../../services/filme/filme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-filme-reviews',
  templateUrl: './modal-filme-reviews.page.html',
  styleUrls: ['./modal-filme-reviews.page.scss'],
})
export class ModalFilmeReviewsPage implements OnInit {

  private RetornoReviews: RetornoReviews = null;

  constructor(
    protected filmeService: FilmeService,
    protected navParams: NavParams,
    protected modalCtrl: ModalController
  ) { }

  ngOnInit() {
    let filmeId = this.navParams.data.FilmeId;
    this.filmeService.BuscarReviews(filmeId, true).subscribe(
      (retorno: RetornoReviews) => {
        this.RetornoReviews = retorno;
        this.filmeService.BuscarReviews(filmeId).subscribe(
          (retorno: RetornoReviews) => {
            retorno.results?.forEach(x => this.RetornoReviews.results.push(x));
            console.log(this.RetornoReviews);
          },
          erro => {
            console.log(erro);
          }
        );
      },
      erro => {
        console.log(erro);
      }
    );
  }

  closeModal() 
  {    
    this.modalCtrl.dismiss();
  }
}
