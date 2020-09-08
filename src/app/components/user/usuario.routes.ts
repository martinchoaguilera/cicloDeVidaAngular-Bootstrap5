import { Routes } from '@angular/router';

import { UsuarioEditarComponent } from   './usuario-editar.component';
import { UsuarioNuevoComponent } from    './usuario-nuevo.component';
import { UsuarioDetallerComponent } from './usuario-detaller.component';

export const USER_ROUTES: Routes = [

           { path: 'nuevo', component: UsuarioNuevoComponent },
           { path: 'editar', component: UsuarioEditarComponent },
           { path: 'detalle', component: UsuarioDetallerComponent },
           { path: '**', pathMatch: 'full', redirectTo: 'nuevo' },

];
