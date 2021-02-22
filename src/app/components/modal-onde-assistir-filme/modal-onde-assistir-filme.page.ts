import { FilmeService } from './../../services/filme/filme.service';
import { RetornoWatchProviders } from './../../models/filme/retornowatchproviders';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-modal-onde-assistir-filme',
  templateUrl: './modal-onde-assistir-filme.page.html',
  styleUrls: ['./modal-onde-assistir-filme.page.scss'],
})
export class ModalOndeAssistirFilmePage implements OnInit {

  public UrlGooglePlay: string = 'https://play.google.com/store/search?c=movies&q=';
  public UrlMicrosoftStore: string = 'https://www.microsoft.com/pt-br/search/shop/Movies?q=';
  public UrlNetflix: string = 'http://www.netflix.com.br';
  public WatchProviders: RetornoWatchProviders = null;
  public FilmeNome: string = null;

  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
};

  constructor(    
    public filmeService: FilmeService,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public theInAppBrowser: InAppBrowser,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    let filmeId = this.navParams.data.FilmeId;
    this.FilmeNome = this.navParams.data.FilmeNome;

    this.filmeService.BuscarWatchProviders(filmeId).subscribe(
    (retorno: any) => {
      this.WatchProviders = retorno.results.BR;
      if (this.WatchProviders)
      {
        if (this.WatchProviders.rent)
        this.WatchProviders.rent.forEach(
          x => {
            if (x.provider_id === 3) //Google Play
              x.url = this.UrlGooglePlay+this.FilmeNome;
            else if (x.provider_id === 68) //Microsoft Store
              x.url = this.UrlMicrosoftStore+this.FilmeNome;

            x.logo_path = `https://www.themoviedb.org/t/p/original${x.logo_path}`
        });
        if (this.WatchProviders.buy)
          this.WatchProviders.buy.forEach(x => 
            {
              if (x.provider_id === 3) //Google Play
                x.url = this.UrlGooglePlay+this.FilmeNome;
              else if (x.provider_id === 68) //Microsoft Store
                x.url = this.UrlMicrosoftStore+this.FilmeNome;

              x.logo_path = `https://www.themoviedb.org/t/p/original${x.logo_path}`
            });
        if (this.WatchProviders.flatrate)
          this.WatchProviders.flatrate.forEach(x => 
            {
              if (x.provider_id === 8)
              {
                if (this.navParams.data.HomePage.toString().includes('netflix'))
                {
                  x.url = this.navParams.data.HomePage.toLowerCase();
                }
              } 
              x.logo_path = `https://www.themoviedb.org/t/p/original${x.logo_path}`
            });
      }
    },
    erro => {
      console.log(erro);
    })
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Ainda não é possível redirecionar para esse filme.',
      duration: 2000
    });
    toast.present();
  }
  closeModal() 
  {    
    this.modalCtrl.dismiss();
  }
  public openWithSystemBrowser(url : string){
    let target = "_system";
    this.theInAppBrowser.create(url,target,this.options);
  }
  public openWithInAppBrowser(url : string){
      let target = "_blank";
      this.theInAppBrowser.create(url,target,this.options);
  }
  public openWithCordovaBrowser(url : string){
      let target = "_self";
      this.theInAppBrowser.create(url,target,this.options);
  }    
}
