import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  public Usuarios: Array<any> = [];
  constructor(private ServiceService:ServiceService,private router:Router) { 

    this.ServiceService.getUsuariosAll().subscribe((resp: any) =>{
      console.log(resp)
      this.Usuarios= resp
   })
  }

  ngOnInit(): void {
  }

  DeleteUsuario(id:number){
    this.ServiceService.DeleteUser(id).subscribe((res:any) =>{
      console.log(res)
      alert('Creado....'+ res['succes'] );
      
      this.router.navigate(['ListarUsuarios']);
     
     
    })
  }
}
