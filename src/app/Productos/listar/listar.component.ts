import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  public Productos: Array<any> = [];
  public Usuarios: Array<any> = [];
  deleteForm=  new FormGroup({

    seleccionado: new FormControl('',Validators.required)
   
   
  });
  constructor(private ServiceService:ServiceService,private router:Router) { 

    this.ServiceService.getProductosAll().subscribe((resp: any) =>{
      console.log(resp)
      this.Productos= resp
   })

   this.ServiceService.getUsuariosAll().subscribe((resp: any) =>{
    console.log(resp)
    this.Usuarios= resp
 })
  }

  ngOnInit(): void {

    
  }

  editar(id:number){

    /**/
      localStorage.setItem("id",id.toString())
      this.router.navigate(['EditarProductos']);
  }

  
  DeleteProducto(id:number){
    
    
    this.ServiceService.DeleteProducto(id,this.deleteForm.value.seleccionado).subscribe((res:any) =>{
      console.log(res)
      alert('Creado....'+ res['succes'] );
      this.ServiceService.getProductosAll().subscribe((resp: any) =>{
        console.log(resp)
        this.Productos= resp
     })
      this.router.navigate(['ListarProductos']);
     
      },
      error => {
          console.log(error);
          alert("Error "+error.error.error );
      })
  
  }

}
