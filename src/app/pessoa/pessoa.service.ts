import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../model/pessoa';
import { Headers, Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  url = "http://localhost:8180/";
  headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  


  public getPessoas(): Promise<Pessoa[]>{

    let endPoint = "pessoas";
    let url = this.url+endPoint;

    return this.http.get(`${url}`)
    .toPromise()
    .then(response => response.json() as Pessoa)
    .catch(this.handleError);
  }

  public getPessoa(id: number): Promise<Pessoa>{

    let endPoint = "pessoas";
    let url = this.url+endPoint;

    return this.http.get(`${url}/${id}`)
    .toPromise()
    .then(response => response.json() as Pessoa)
    .catch(this.handleError);
  }


  public create (pessoa: Pessoa): Promise<Pessoa>{

    let endPoint = "pessoas";
    let url = this.url+endPoint;    

    return this.http.post(url, JSON.stringify(pessoa),
    {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Pessoa)
      .catch(this.handleError);    
  }

  public update (pessoa: Pessoa): Promise<Pessoa>{

    let endPoint = "pessoas";
    let url = this.url+endPoint;    

    return this.http.put(url, JSON.stringify(pessoa),
    {headers: this.headers})
      .toPromise()
      .then(res => res.json() )
      .catch(this.handleError);    
  }

  public delete(id: number): Promise<Pessoa>{
        
    let endPoint = "pessoas";

    const url = `${this.url}/${endPoint}/${id}`;
    
    return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(res => res)
    .catch(this.handleError);
  } 

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
