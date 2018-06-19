import { PessoaFilterComponent } from "./pessoa/pessoa-filter/pessoa-filter.component";
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PessoaCadastroComponent } from "./pessoa/pessoa-cadastro/pessoa-cadastro.component";

const routes: Routes = [
    
    { path: 'pessoa-filter/pessoa-cadastro',  component: PessoaCadastroComponent } ,
    { path: 'pessoa-filter/pessoa-cadastro/:id',  component: PessoaCadastroComponent } ,
    { path: 'pessoa-filter',  component: PessoaFilterComponent }, 
    {path: '', redirectTo: '/pessoa-filter', pathMatch: 'full'}
    
    
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes) ],
    exports: [ RouterModule]
  })
  export class AppRoutingModule { }
  