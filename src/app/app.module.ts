import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PessoaModule } from './pessoa/pessoa.module';
import { PessoaService } from './pessoa/pessoa.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule, FormsModule, PessoaModule, HttpClientModule,RouterModule
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
