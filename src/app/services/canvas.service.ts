import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CanvasService {
  public canvas: HTMLCanvasElement = undefined as any;
  public ctx: CanvasRenderingContext2D = undefined as any;

  private intervalID!: any;

  constructor() {
    this.intervalID = setInterval(() => {
      let result: HTMLElement | null = document.getElementById('canvas-main');
      if (result && result.tagName == 'CANVAS') {
        clearInterval(this.intervalID);
        this.canvas = result as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        let parent = document.querySelector(
          'canvas-view.canvas-view'
        ) as HTMLElement;
        this.canvas.width = parent.offsetWidth;
        this.canvas.height = parent.offsetHeight;
      }
    }, 100);
  }

  ClearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
