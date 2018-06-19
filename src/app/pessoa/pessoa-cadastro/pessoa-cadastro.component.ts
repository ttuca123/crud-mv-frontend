import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pessoa } from '../../model/pessoa';
import { Location } from '@angular/common';
import { PessoaService } from '../pessoa.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  @Input() pessoa: Pessoa = new Pessoa();
  @Output() atualizaTelefones = new EventEmitter();
  
  titulo: String;

  submitted = false;  
  carregando: boolean = true;


  constructor(private location: Location,   private route: ActivatedRoute,
    private pessoaService: PessoaService) {

      
     }

     
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); 

    if(id==null){
      this.titulo = "Cadastro de Pessoa";    
      this.pessoa = new Pessoa();
    }else{
      this.titulo = "Editar dados de Pessoa";    
      this.getPessoa(id);      
    }
  }

  getPessoa(id: any){
    this.pessoaService.getPessoa(id).then
     (pessoa => {this.pessoa =  pessoa,       
       this.atualizaTelefones.emit({novoValor: this.pessoa.telefones}); 
       this.carregando = false}
     );      
  }

  salvar(){
    
    this.pessoaService.create(this.pessoa);

  }

  atualizar(){
    
    this.pessoaService.update(this.pessoa);    

  }

  atualizarLista(event: any){
    this.pessoa.telefones = event.novoValor;
   
  }

  onSubmit() { 
    this.submitted = true; 
   }

  goBack(): void {
    this.location.back();
  }


}
