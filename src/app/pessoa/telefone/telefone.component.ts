import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pessoa } from '../../model/pessoa';
import { Telefone } from '../../model/telefone';

@Component({
  selector: 'app-telefone',
  templateUrl: './telefone.component.html',
  styleUrls: ['./telefone.component.css']
})

export class TelefoneComponent implements OnInit {

  @Input('pessoa') pessoa: Pessoa;

  @Output() mudouTelefone = new EventEmitter();

  @Output() atualizaTelefones = new EventEmitter();

  telefones= new Array<Telefone>();
  telefone: Telefone=new Telefone();

  constructor() {
    
    
   }

  ngOnInit() {

    if(this.pessoa.telefones==undefined){
      this.telefones = new Array<Telefone>();
      this.telefone = new Telefone();
    }else{

      this.telefones = this.pessoa.telefones;
      console.log("Fones: "+this.pessoa.telefones);
    }

  }

  adicionar(){

    this.telefones.push(this.telefone);
    this.telefone = new Telefone();
    this.mudouTelefone.emit({novoValor: this.telefones});
  }

  remover(telefone: Telefone){
    
    var index = this.telefones.indexOf(telefone, 0)
      if (index > -1) {
        this.telefones.splice(index, 1);
  }
  this.mudouTelefone.emit({novoValor: this.telefones});
  }

  
  atualizarLista(event: any){

    this.telefones = event.novoValor; 
    console.log(this.telefones);
    
  }

}
