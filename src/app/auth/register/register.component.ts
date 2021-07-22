import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Subscriber } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public Cargos: Array<any> = [];
  registerForm=  new FormGroup({

    username: new FormControl(''),
    identificacion: new FormControl(''),
    clave: new FormControl(''),
    nombre: new FormControl(''),
    id_cargo: new FormControl(''),
   
  });

  constructor(private AuthService:AuthService,private router:Router) {

    this.AuthService.getCargosAll().subscribe((resp: any) =>{
      console.log(resp)
      this.Cargos= resp
   })
  
  }

  ngOnInit(): void {
  }

  onRegister(){
      
      console.log('Form ->',this.registerForm.value)
      this.AuthService.register(this.registerForm.value).subscribe( (res:any) =>{
        console.log(res)
        
      
        alert('Creado....'+ res['succes'] );
        this.router.navigate(['ListarUsuarios']);
       
        },
        error => {
            console.log(error);
            alert("Error "+error.error.error );
        })
  }
}
