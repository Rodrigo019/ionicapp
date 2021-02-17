import { Cast } from './../../models/filme/cast';
import { RetornoCreditos } from './../../models/filme/retornocreditos';
import { ModalController, NavParams } from '@ionic/angular';
import { FilmeService } from './../../services/filme/filme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-filme-creditos',
  templateUrl: './modal-filme-creditos.page.html',
  styleUrls: ['./modal-filme-creditos.page.scss'],
})
export class ModalFilmeCreditosPage implements OnInit {

  private RetornoCreditos: RetornoCreditos = null;
  private MatrizDeCast: any[] = [];
  private Imagens: string [] = [];

  constructor(
    protected filmeService: FilmeService,
    protected navParams: NavParams,
    protected modalCtrl: ModalController
  ) { }

  ngOnInit() {
    let filmeId = this.navParams.data.FilmeId;
    this.filmeService.BuscaCreditos(filmeId, true).subscribe(
      retorno => {

        this.RetornoCreditos = retorno;
        this.RetornoCreditos.cast = this.RetornoCreditos.cast.filter(x => x.profile_path !== null);
        this.RetornoCreditos.cast.forEach(x => x.profile_path = `https://www.themoviedb.org/t/p/original${x.profile_path}`);        
        this.RetornoCreditos.cast.forEach(x => this.Imagens.push(x.profile_path));
        let cont = 0;
        let castLinha: Cast[] = [];
        
        this.RetornoCreditos.cast.forEach(x => {
          if (cont < 2)
          {            
            castLinha.push(x);
            cont++;
          }
          else
          {
            this.MatrizDeCast.push(castLinha);
            castLinha = [];
            cont = 0;
          }
        });
      },
      erro => console.log(erro)
    );
  }

  closeModal() 
  {    
    this.modalCtrl.dismiss();
  }

  erroImagem($event) 
  {
    console.log($event);
  }
}
