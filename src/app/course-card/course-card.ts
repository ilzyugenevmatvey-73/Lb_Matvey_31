import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CourseFormat, CourseLevel } from '../modeling-courses';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrls: ['./course-card.scss'],
})
export class CourseCardComponent implements OnChanges {
  isHovered = false;

  @Input() id = 0;
  @Input() title = '';
  @Input() image = '';
  @Input() desc = '';
  @Input() format: CourseFormat = 'recorded';
  @Input() level: CourseLevel = 'base';
  @Input() duration = '';
  @Input() liked = false;

  @Output() likedChange = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Обновились входные данные карточки курса:', changes);
  }

  openRoom(): void {
    this.router.navigate(['/studio-room', this.id]);
  }

  toggleLike(event: Event): void {
    event.stopPropagation();
    this.likedChange.emit(!this.liked);
  }
}
