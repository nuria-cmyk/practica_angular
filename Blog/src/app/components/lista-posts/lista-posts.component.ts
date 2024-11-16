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

  ngOnInit() {
    this.arrPosts = this.postsService.getAll()
  }
}
