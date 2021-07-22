import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {  path: '', 
    redirectTo:'/home',
    pathMatch:'full' }, 
  {  path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'ListarProductos', loadChildren: () => import('./Productos/listar/listar.module').then(m => m.ListarModule) },
  { path: 'AgregarProductos', loadChildren: () => import('./Productos/agregar/agregar.module').then(m => m.AgregarModule) },
  { path: 'EditarProductos', loadChildren: () => import('./Productos/editar/editar.module').then(m => m.EditarModule) },
  { path: 'ListarUsuarios', loadChildren: () => import('./Usuarios/listar/listar.module').then(m => m.ListarModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
