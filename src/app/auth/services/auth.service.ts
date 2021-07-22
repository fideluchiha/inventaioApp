import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _url= 'http://localhost:8080/inventario'
  constructor(  private http: HttpClient) { }

  login(form:any){
    let header = new HttpHeaders().set('Content-Type','application/json')
    return this.http.post(this._url+"/save",form,{
      headers: header
    });
  }
  register(form:any){
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
      
    });
    return this.http.post(this._url+"/usuarios/save",form,{
    headers: header
  });
}

  getCargosAll(){

    let header = new HttpHeaders().set('Content-Type','application/json')
    return this.http.get(this._url+"/cargos/all",{
      headers: header
    });
  }

  


  logout(){}
  currenUser(){}
}
