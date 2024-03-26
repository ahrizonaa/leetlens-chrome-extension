import { Component } from '@angular/core';
import { CanvasBackground } from './components/canvas-background/canvas-background';
import { ContentView } from './components/content-view/content-view';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [CanvasBackground, ContentView],
})
export class App {
  logoClicked(evt: MouseEvent) {
    window.open('https://leetlens.vercel.app', '_blank');
  }
}
