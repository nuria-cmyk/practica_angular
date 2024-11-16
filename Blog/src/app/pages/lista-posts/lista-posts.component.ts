import { Component, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { IPost } from '../../interfaces/ipost.interface';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-lista-posts',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './lista-posts.component.html',
  styleUrl: './lista-posts.component.css'
})
export class ListaPostsComponent {

  postsService = inject(PostsService)

  arrPosts: IPost[] = []
  arrCategorias: string[] = []

  ngOnInit() {
    this.arrPosts = this.postsService.getAll()
    this.arrCategorias = this.postsService.getCategorias()
  }

  onChange(event: Event) {
    const selector = event.target as HTMLSelectElement
    if (selector.value === 'Todas') {
      this.arrPosts = this.postsService.getAll()
    } else {
      this.arrPosts = this.postsService.getByCategory(selector.value)
    }
  }
}
