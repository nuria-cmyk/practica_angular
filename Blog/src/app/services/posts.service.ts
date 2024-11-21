import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/ipost.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private localStorageKey = 'posts';

  getAll(): IPost[] {
    const posts = localStorage.getItem(this.localStorageKey);
    return posts ? JSON.parse(posts) : this.getDefaultPosts();
  }

  getByCategory(category: string): IPost[] {
    return this.getAll().filter(post => post.categoria === category);
  }

  createPost(postNuevo: IPost) {
    const posts = this.getAll();
    posts.push(postNuevo);
    this.saveToLocalStorage(posts);
  }

  getCategorias(): string[] {
    return [...new Set(this.getAll().map(post => post.categoria))];
  }

  private saveToLocalStorage(posts: IPost[]) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(posts));
  }

  private getDefaultPosts(): IPost[] {
    return [
      {
        id: 1,
        titulo: 'Innovación en la Tecnología',
        texto: 'La tecnología avanza a pasos agigantados, transformando nuestras vidas...',
        autor: 'Juan Pérez',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_NJ3F8pMm6sBkCOWtYja_VsrNezNjmCtrQg&s',
        fecha: new Date('2024-11-15'),
        categoria: 'Tecnología'
      },
      {
        id: 2,
        titulo: 'La Cultura en la era digital',
        texto: 'La cultura está experimentando un cambio sin precedentes gracias a internet...',
        autor: 'Ana García',
        imagen: 'https://www.ie.edu/insights/wp-content/uploads/2017/05/Prueba-y-aprendizaje-transformacion-cultural-en-la-era-digital-473x267.jpg',
        fecha: new Date('2024-11-16'),
        categoria: 'Cultura'
      },
      {
        id: 3,
        titulo: 'Deportes y tecnología, una combinación ganadora',
        texto: 'El deporte se está beneficiando enormemente del avance tecnológico...',
        autor: 'Carlos López',
        imagen: 'https://www.chemicalsafetyfacts.org/wp-content/uploads/star-athlete-update.png',
        fecha: new Date('2024-11-14'),
        categoria: 'Deportes'
      },
      {
        id: 4,
        titulo: 'Salud y bienestar en tiempos de pandemia',
        texto: 'La salud mental y física se ha visto afectada por la pandemia mundial...',
        autor: 'Marta Díaz',
        imagen: 'https://www.iisaragon.es/wp-content/uploads/2021/11/captura-de-pantalla-2021-10-29-173037.r_d.618-389-9546-990x675.jpeg',
        fecha: new Date('2024-11-13'),
        categoria: 'Salud'
      },
      {
        id: 5,
        titulo: 'Los Negocios en el mundo digital',
        texto: 'Las empresas están adaptándose a la digitalización para seguir siendo competitivas...',
        autor: 'Luis Martínez',
        imagen: 'https://www.planetaformacion.com/sites/pfu.es/files/images/businessman-holding-digital-tablet-success-cityscape-generated-by-ai%20(2)_0.jpg',
        fecha: new Date('2024-11-12'),
        categoria: 'Negocios'
      },
      {
        id: 6,
        titulo: 'El futuro de la inteligencia artificial',
        texto: 'La inteligencia artificial está revolucionando diferentes industrias, desde la medicina hasta la educación...',
        autor: 'Sofia Ramírez',
        imagen: 'https://emocional.com/wp-content/uploads/2023/02/AdobeStock_332052791-scaled.jpeg',
        fecha: new Date('2024-11-10'),
        categoria: 'Tecnología'
      },
      {
        id: 7,
        titulo: 'La evolución de la pintura moderna',
        texto: 'La pintura moderna ha pasado por muchas transformaciones a lo largo de los siglos...',
        autor: 'María Gómez',
        imagen: 'https://apreciart.pe/articulos/wp-content/uploads/2024/04/La-evolucion-del-arte-moderno-300x300.png',
        fecha: new Date('2024-11-09'),
        categoria: 'Cultura'
      },
      {
        id: 8,
        titulo: 'Cómo el deporte ayuda a la salud mental',
        texto: 'El deporte no solo es importante para el cuerpo, sino que también es esencial para la mente...',
        autor: 'Pablo Rodríguez',
        imagen: 'https://i0.wp.com/akroscenter.com/wp-content/uploads/2023/04/ejercicio-y-salud-mental.jpg_1589270285.jpg?fit=1024%2C570&ssl=1',
        fecha: new Date('2024-11-08'),
        categoria: 'Deportes'
      },
      {
        id: 9,
        titulo: 'Cómo mantener una buena salud en la rutina diaria',
        texto: 'Hay muchas maneras de cuidar nuestra salud en el día a día, desde la alimentación hasta la actividad física...',
        autor: 'Javier Torres',
        imagen: 'https://www.aicad.es/asset/img/3/rutinas-diarias-100.jpeg',
        fecha: new Date('2024-11-07'),
        categoria: 'Salud'
      },
      {
        id: 10,
        titulo: 'Estrategias para el crecimiento de negocios online',
        texto: 'El mundo digital ofrece muchas oportunidades para expandir un negocio. ¿Cómo aprovecharlas?',
        autor: 'Sara López',
        imagen: 'https://staticupthemedia.s3.amazonaws.com/upload/acelerar-crecimiento-negocio-online-471x250.jpg',
        fecha: new Date('2024-11-06'),
        categoria: 'Negocios'
      }
    ]
  }
}

/* getAll(): IPost[] {
  return this.posts
}

getByCategory(category: string): IPost[] {
  return this.posts.filter(post => post.categoria === category)
}

createPost(postNuevo: IPost) {
  this.posts.push(postNuevo)
}

getCategorias(): string[] {
  return [...new Set(this.posts.map(prod => prod.categoria))]
}

} */
