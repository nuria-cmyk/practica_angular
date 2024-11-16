import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/ipost.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPosts: IPost[] = []

  getAll() {
    return this.arrPosts
  }

  getByCategory(category: string): IPost[] {
    return this.arrPosts.filter(post => post.categoria === category)
  }
  


}
