import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FeedbackBlockComponent } from '../feedback-block/feedback-block';
import { ModelingCourse, ModelingCoursesService } from '../modeling-courses';

@Component({
  selector: 'app-studio-room',
  standalone: true,
  imports: [CommonModule, RouterLink, FeedbackBlockComponent],
  templateUrl: './studio-room.html',
  styleUrls: ['./studio-room.scss'],
})
export class StudioRoomComponent implements OnInit {
  course?: ModelingCourse;

  constructor(
    private route: ActivatedRoute,
    private coursesService: ModelingCoursesService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.course = this.coursesService.getById(id);
  }
}
