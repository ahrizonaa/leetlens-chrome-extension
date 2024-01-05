import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Anime {
  id: number;
  enabled: boolean = true;
  ids: number[];
  cancelling: boolean = false;

  constructor() {
    this.id = undefined as any;
    this.ids = [];
  }

  IsActive(): boolean {
    return this.ids.length == 0;
  }
  IsInactive(): boolean {
    return this.ids.length == 0;
  }
  Request(fn: FrameRequestCallback): void {
    this.ids.push(window.requestAnimationFrame(fn));
  }
  Cancel(): void {
    this.cancelling = true;
    for (let id of this.ids) {
      window.cancelAnimationFrame(id);
    }
    this.ids = [];
    this.cancelling = false;
  }
}
