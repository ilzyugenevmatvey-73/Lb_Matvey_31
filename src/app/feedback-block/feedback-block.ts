import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FeedbackShellComponent } from '../feedback-shell/feedback-shell';

@Component({
  selector: 'app-feedback-block',
  standalone: true,
  imports: [CommonModule, FormsModule, FeedbackShellComponent],
  templateUrl: './feedback-block.html',
  styleUrls: ['./feedback-block.scss'],
})
export class FeedbackBlockComponent {
  userName = '';
  newComment = '';
  comments: { author: string; text: string; createdAt: Date }[] = [];

  addComment(): void {
    const author = this.userName.trim() || 'Гость';
    const text = this.newComment.trim();

    if (!text) return;

    this.comments.unshift({ author, text, createdAt: new Date() });
    this.newComment = '';
  }

  removeComment(index: number): void {
    this.comments.splice(index, 1);
  }
}
