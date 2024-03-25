import { Component } from '@angular/core';
import { UserInput } from 'src/app/services/user-input.service';

@Component({
  selector: 'canvas-view',
  templateUrl: './canvas-view.html',
  styleUrls: ['./canvas-view.css'],
  standalone: true,
})
export class CanvasView {
  constructor(protected ui: UserInput) {}
}
