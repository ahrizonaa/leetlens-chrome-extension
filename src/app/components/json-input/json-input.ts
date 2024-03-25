import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { UserInput } from 'src/app/services/user-input.service';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'json-input',
  templateUrl: './json-input.html',
  styleUrls: ['./json-input.css'],
  standalone: true,
  imports: [ButtonModule, InputTextareaModule, FormsModule],
})
export class JsonInput {
  @ViewChild('input') input!: NgModel;

  constructor(public ui: UserInput) {}

  refreshClicked(evt: MouseEvent) {
    this.ui.refreshDisabled = true;
    this.ui.refresh();
    this.ui.refreshDisabled = false;
  }

  textareaValueChanged(value: string) {
    if (value == '') {
      this.ui.currError = '';
      this.ui.refreshDisabled = false;
    }
  }
}
