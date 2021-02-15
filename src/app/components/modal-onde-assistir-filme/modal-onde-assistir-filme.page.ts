import { FilmeService } from './../../services/filme/filme.service';
import { RetornoWatchProviders } from './../../models/filme/retornowatchproviders';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-onde-assistir-filme',
  templateUrl: './modal-onde-assistir-filme.page.html',
  styleUrls: ['./modal-onde-assistir-filme.page.scss'],
})
export class ModalOndeAssistirFilmePage implements OnInit {

  private WatchProviders: RetornoWatchProviders = null;

  constructor(
    protected filmeService: FilmeService,
    protected navParams: NavParams,
    protected modalCtrl: ModalController
  ) { }

  ngOnInit() {
    let filmeId = this.navParams.data.FilmeId;
    this.filmeService.BuscarWatchProviders(filmeId).subscribe(
    (retorno: any) => {
      this.WatchProviders = retorno.results.BR;
      if (this.WatchProviders)
      {
        if (this.WatchProviders.rent)
        this.WatchProviders.rent.forEach(x => x.logo_path = `https://www.themoviedb.org/t/p/original${x.logo_path}`);
        if (this.WatchProviders.buy)
          this.WatchProviders.buy.forEach(x => x.logo_path = `https://www.themoviedb.org/t/p/original${x.logo_path}`);
        if (this.WatchProviders.flatrate)
          this.WatchProviders.flatrate.forEach(x => x.logo_path = `https://www.themoviedb.org/t/p/original${x.logo_path}`);
      }
    },
    erro => {
      console.log(erro);
    })
  }

  closeModal() 
  {    
    this.modalCtrl.dismiss();
  }
}
