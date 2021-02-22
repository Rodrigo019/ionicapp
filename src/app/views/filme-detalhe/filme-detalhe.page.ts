import { FilmeService } from './../../services/filme/filme.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './filme-detalhe.page.html',
  styleUrls: ['./filme-detalhe.page.scss'],
})
export class FilmeDetalhePage implements OnInit {

  public Id: number = 0;

  constructor(
    private router: ActivatedRoute,
    private filmeService: FilmeService
    ) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      if (params['id'])
        this.Id = params['id'];
    });
  }
}
