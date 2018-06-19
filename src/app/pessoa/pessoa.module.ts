import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';

import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { PessoaFilterComponent } from './pessoa-filter/pessoa-filter.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { TelefoneComponent } from './telefone/telefone.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    HttpModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule    
  ],
  declarations: [TelefoneComponent, PessoaFilterComponent, PessoaListaComponent, PessoaCadastroComponent],
  exports: [PessoaFilterComponent, PessoaListaComponent, PessoaCadastroComponent]
})
export class PessoaModule { }
