import { Component } from '@angular/core';
import { UserInput } from 'src/app/services/user-input.service';
import { TogglePanel } from '../toggle-panel/toggle-panel';
import { ExamplesList } from '../examples-list/examples-list';
import { JsonInput } from '../json-input/json-input';
import { CanvasView } from '../canvas-view/canvas-view';

@Component({
  selector: 'content-view',
  templateUrl: './content-view.html',
  styleUrls: ['./content-view.css'],
  standalone: true,
  imports: [TogglePanel, ExamplesList, JsonInput, CanvasView],
})
export class ContentView {
  constructor(protected ui: UserInput) {}
}
