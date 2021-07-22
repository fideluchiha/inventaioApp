import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  _url= 'http://localhost:8080/inventario'
  constructor(  private http: HttpClient) { }



  getUsuariosAll(){

    let header = new HttpHeaders().set('Content-Type','application/json')
    return this.http.get(this._url+"/usuarios/all",{
      headers: header
    });
    
  }

  DeleteUser(id:number){

    let header = new HttpHeaders().set('Content-Type','application/json')
    return this.http.get(this._url+"/usuarios/delete/"+id,{
      headers: header
    });
  }


  DeleteProducto(id:number,idUsuario:number){

    let header = new HttpHeaders().set('Content-Type','application/json')
    return this.http.get(this._url+"/productos/delete/"+id+"/"+""+idUsuario,{
      headers: header
    });
  }
  getProducto(id:any){

    let header = new HttpHeaders().set('Content-Type','application/json')
    return this.http.get(this._url+"/productos/findOne/"+id,{
      headers: header
    });
    
  }



  getProductosAll(){

    let header = new HttpHeaders().set('Content-Type','application/json')
    return this.http.get(this._url+"/productos/all",{
      headers: header
    });
    
  }

  registerProducto(form:any){
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
      
    });
    return this.http.post(this._url+"/productos/save",form,{
    headers: header
  });
}


editarProducto(form:any){
  let header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    
  });
  return this.http.post(this._url+"/productos/edit",form,{
  headers: header
});
}
}
