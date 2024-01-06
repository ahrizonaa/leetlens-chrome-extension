import { Component, Input } from '@angular/core';
import { UserInput } from 'src/app/services/user-input.service';
import { FloatingControlOptions } from 'src/app/types/FloatingControlOptions';

@Component({
  selector: 'colorpicker',
  templateUrl: './colorpicker.html',
  styleUrls: ['./colorpicker.css'],
})
export class ColorPicker {
  @Input('options') options!: FloatingControlOptions;

  color: string = '';

  constructor(private ui: UserInput) {}

  colorChanged() {
    if (!this.color) {
      return;
    }
    this.ui.colorChanged(this.color, this.options.title);
  }
}
