import { Routes } from '@angular/router';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';
import { FormularioComponent } from './components/formulario/formulario.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/posts' },
    { path: 'posts', component: ListaPostsComponent },
    { path: 'new', component: FormularioComponent }
];
