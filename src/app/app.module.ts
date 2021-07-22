import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


/*{ path: 'ListarProductos', loadChildren: () => import('./Productos/listar/listar.module').then(m => m.ListarModule) },
  { path: 'AgregarProductos', loadChildren: () => import('./Productos/agregar/agregar.module').then(m => m.AgregarModule) },
  { path: 'EditarProductos', loadChildren: () => import('./Productos/editar/editar.module').then(m => m.EditarModule) },
  { path: 'ListarUsuarios', loadChildren: () => import('./Usuarios/listar/listar.module').then(m => m.ListarModule) }]; */
@NgModule({
  
  declarations: [
    AppComponent,NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
