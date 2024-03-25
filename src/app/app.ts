import { Component } from '@angular/core';
import { TabView } from './components/tab-view/tab-view';
import { CanvasBackground } from './components/canvas-background/canvas-background';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [TabView, CanvasBackground],
})
export class App {}
