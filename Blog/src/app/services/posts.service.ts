import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/ipost.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: IPost[] = [
    {
      id: 1,
      titulo: "5 claves para mejorar tu productividad",
      texto: "Descubre cómo optimizar tu día a día con estas técnicas comprobadas para mejorar tu enfoque y organización.",
      autor: "María López",
      imagen: "https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fecha: new Date(2024, 10, 16),
      categoria: "Desarrollo Personal"
    },
    {
      id: 2,
      titulo: "Tendencias tecnológicas para 2025",
      texto: "Exploramos las innovaciones tecnológicas que marcarán el próximo año, desde IA hasta avances en robótica.",
      autor: "Juan Pérez",
      imagen: "https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fecha: new Date(2024, 10, 14),
      categoria: "Tecnología"
    },
    {
      id: 3,
      titulo: "Recetas fáciles para cenar en 20 minutos",
      texto: "Conoce cinco recetas rápidas y deliciosas para las noches en las que no tienes tiempo de cocinar.",
      autor: "Ana Martínez",
      imagen: "https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fecha: new Date(2024, 10, 13),
      categoria: "Cocina"
    },
    {
      id: 4,
      titulo: "La importancia del ejercicio para la salud mental",
      texto: "El ejercicio no solo beneficia tu cuerpo, sino también tu mente. Te contamos cómo y por qué.",
      autor: "Carlos Ruiz",
      imagen: "https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fecha: new Date(2024, 10, 10),
      categoria: "Salud y Bienestar"
    },
    {
      id: 5,
      titulo: "Cómo planificar tus viajes para ahorrar dinero",
      texto: "Con estos consejos prácticos, podrás disfrutar de tus vacaciones sin gastar de más.",
      autor: "Laura Gómez",
      imagen: "https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fecha: new Date(2024, 10, 8),
      categoria: "Desarrollo Personal"
    },
    {
      id: 6,
      titulo: "Ideas de decoración minimalista para tu hogar",
      texto: "Transforma tus espacios con estas ideas simples que combinan estilo y funcionalidad.",
      autor: "Sofía Torres",
      imagen: "https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fecha: new Date(2024, 10, 5),
      categoria: "Hogar y Decoración"
    },
    {
      id: 7,
      titulo: "Guía para empezar en el mundo del diseño gráfico",
      texto: "Aprende las bases del diseño gráfico y descubre herramientas clave para principiantes.",
      autor: "Miguel Sánchez",
      imagen: "https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fecha: new Date(2024, 10, 2),
      categoria: "Tecnología"
    },
    {
      id: 8,
      titulo: "Cómo construir hábitos saludables que perduren",
      texto: "Crea rutinas sostenibles con estrategias que te ayudarán a mantener el cambio a largo plazo.",
      autor: "Paula Fernández",
      imagen: "https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fecha: new Date(2024, 10, 1),
      categoria: "Salud y Bienestar"
    }
  ]

  getAll() {
    return this.posts
  }

  getByCategory(category: string): IPost[] {
    return this.posts.filter(post => post.categoria === category)
  }

  createPost(postNuevo: IPost) {
    this.posts.push(postNuevo)
  }


}
