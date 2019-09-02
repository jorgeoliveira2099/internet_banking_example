import { Component, OnInit } from '@angular/core';

@Component({
  //aqui entre aspas simples, ele está apelidando os componentes
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  public texto:string
  constructor() { }


  ngOnInit() {
    this.texto = "por essa nem o futuro esperava"
  }

  

  clicar(){
    this.texto = "texto trocado com sucesso"
  }

  voltar(){
    this.texto = "por essa nem o futuro esperava"
  }
}
