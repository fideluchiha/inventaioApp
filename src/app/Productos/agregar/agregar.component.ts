import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  public Usuarios: Array<any> = [];
  registerProductoForm=  new FormGroup({

    nombreProducto: new FormControl(''),
    cantidad: new FormControl(''),
    fechaIngreso: new FormControl(''),
    id_usuario: new FormControl(''),
   
   
  });
  
  constructor(private ServiceService:ServiceService,private router:Router) { 

    this.ServiceService.getUsuariosAll().subscribe((resp: any) =>{
      console.log(resp)
      this.Usuarios= resp
   })
  }

  ngOnInit(): void {
  }


  onRegisterProducto(){
      
    console.log('Form ->',this.registerProductoForm.value)
    this.ServiceService.registerProducto(this.registerProductoForm.value).subscribe( (res:any) =>{
      console.log(res)
      
    
      alert('Creado....'+ res['succes'] );
      this.router.navigate(['ListarProductos']);
     
      },
      error => {
          console.log(error);
          alert( error.error.error );
      })
  }
}
