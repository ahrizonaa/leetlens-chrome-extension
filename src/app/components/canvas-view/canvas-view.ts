import { AfterViewInit, Component } from '@angular/core';
import { UserInput } from 'src/app/services/user-input.service';

import panzoom, { PanZoomOptions } from 'panzoom';

// declare const panzoom:

@Component({
  selector: 'canvas-view',
  templateUrl: './canvas-view.html',
  styleUrls: ['./canvas-view.css'],
  standalone: true,
})
export class CanvasView implements AfterViewInit {
  constructor(protected ui: UserInput) {}

  ngAfterViewInit(): void {
    let canvas = document.getElementById('canvas-main')!;

    let options: PanZoomOptions = {
      smoothScroll: false,
      beforeWheel: (e) => {
        return false;
      },
      bounds: true,
      // boundsPadding: 1,
      maxZoom: 1,
      minZoom: 1,
      initialZoom: 1,
      // initialX: 0,
      // initialY: 0,
    };

    panzoom(canvas, options);
  }
}
