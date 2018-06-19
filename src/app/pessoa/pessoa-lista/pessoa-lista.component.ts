import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from '../../model/pessoa';
import { PessoaService } from '../pessoa.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pessoa-lista',
  templateUrl: './pessoa-lista.component.html',
  styleUrls: ['./pessoa-lista.component.css']
})
export class PessoaListaComponent implements OnInit {

  carregando: boolean = true;

  pessoas: Pessoa[];

  @Input('pessoa') pessoa: Pessoa;

  pageAtual: number = 1;  

  itensPorPagina: number = 10;

  numPages: number = 0;

  maxSize: number = 10;  

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {

    this.getPessoas();
  }

  getPessoas(): void {              
    
    this.pessoaService.getPessoas().then
    (pessoas => {this.pessoas =  pessoas,  
      this.carregando = false}
    );      
    
  }

  remover(pessoa: Pessoa){
    
    this.pessoaService.delete(pessoa.id).then(pessoa => {this.pessoa =  pessoa,
       this.carregando = false});
    
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    this.pageAtual = event.page;

  }

  

}
