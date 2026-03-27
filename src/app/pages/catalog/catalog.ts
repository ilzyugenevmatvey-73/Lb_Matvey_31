import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from '../../course-card/course-card';
import { ModelingCourse, ModelingCoursesService } from '../../modeling-courses';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './catalog.html',
  styleUrls: ['./catalog.scss'],
})
export class CatalogComponent implements OnInit {
  items: ModelingCourse[] = [];

  constructor(private coursesService: ModelingCoursesService) {}

  ngOnInit(): void {
    this.items = this.coursesService.getItems();
  }

  get likedCount(): number {
    return this.items.filter((item) => item.liked).length;
  }
}
