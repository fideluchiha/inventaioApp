import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  public producto: Array<any> = [];
  public Usuarios: Array<any> = [];
  constructor(private ServiceService:ServiceService,private router:Router) {


    this.ServiceService.getUsuariosAll().subscribe((resp: any) =>{
      console.log(resp)
      this.Usuarios= resp
   })
  
  }

  ngOnInit(): void {

    this.editar();
  }

  editar(){
    let id=localStorage.getItem("id")
    this.ServiceService.getProducto(id).subscribe((res:any) =>{
      console.log(res)
      this.producto= res
     
      },
      error => {
          console.log(error);
          alert("Error "+error.error.error );
      })
  }

}
