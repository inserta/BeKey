import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  codigo: string;
  abierto: boolean;

  constructor(
    private loader: LoadingService
  ) { }

  ngOnInit(){
    this.codigo = "";
    this.abierto = false;
  }

  add(numero: string){
    if(this.codigo.length<10){
      this.codigo = this.codigo + numero;
    }
  }

  delete(){
    this.codigo = "";
  }

  enter(){
    this.loader.present();
    setTimeout(() => {
      this.loader.dismiss();
      this.abierto = true;
      setTimeout(() => {
        this.abierto = false;
        this.codigo = "";
      }, 2000);
    }, 2000);
  }

}
