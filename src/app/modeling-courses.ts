import { Injectable } from '@angular/core';

export type CourseFormat = 'live' | 'recorded';
export type CourseLevel = 'base' | 'advanced';

export interface ModelingCourse {
  id: number;
  title: string;
  desc: string;
  image: string;
  format: CourseFormat;
  level: CourseLevel;
  duration: string;
  liked: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModelingCoursesService {
  private items: ModelingCourse[] = [
    {
      id: 1,
      title: 'Blender Start: интерьер с нуля',
      desc: 'Базовый курс по Blender: интерфейс, свет, материалы и сборка уютной интерьерной сцены для портфолио.',
      image: 'blender.png',
      format: 'live',
      level: 'base',
      duration: '6 недель',
      liked: false,
    },
    {
      id: 2,
      title: 'Sculpt Lab: создание стилизованного персонажа',
      desc: 'Практика по скульптингу: силуэт, пропорции, детализация лица и финальная подача модели.',
      image: 'Sculpt.JPG',
      format: 'recorded',
      level: 'advanced',
      duration: '8 недель',
      liked: false,
    },
    {
      id: 3,
      title: 'MAX 3D',
      desc: 'Курс по моделированию техники и props: чистая сетка, фаски, модификаторы и реалистичная подача.',
      image: 'Max.png',
      format: 'live',
      level: 'advanced',
      duration: '5 недель',
      liked: false,
    },
    {
      id: 4,
      title: 'Game Asset Mini Pack',
      desc: 'Создание игровых ассетов для окружения: low poly, bake карт, текстуры и экспорт в движок.',
      image: 'Sprite.png',
      format: 'recorded',
      level: 'base',
      duration: '4 недели',
      liked: false,
    },
  ];

  getItems(): ModelingCourse[] {
    return this.items;
  }

  getById(id: number): ModelingCourse | undefined {
    return this.items.find((item) => item.id === id);
  }
}
