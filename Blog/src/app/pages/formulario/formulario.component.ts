import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  postsService = inject(PostsService)
  router = inject(Router)

  formulario: FormGroup = new FormGroup({
    titulo: new FormControl(),
    texto: new FormControl(),
    autor: new FormControl(),
    imagen: new FormControl(),
    categoria: new FormControl()
  })

  onSubmit() {

    const postNuevo = {
      ...this.formulario.value,
      _id: '',
      fecha: new Date()
    }

    this.postsService.createPost(postNuevo)

    Swal.fire({
      title: 'Nuevo',
      text: '¡Tu post ha sido publicado con éxito!',
      icon: 'success',
      iconColor: '#6a5acd'
    })

    this.router.navigateByUrl('posts')
  }
}
