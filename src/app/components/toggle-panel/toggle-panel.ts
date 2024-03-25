import { UserInput } from './../../services/user-input.service';
import { Component } from '@angular/core';
import { Format } from 'src/app/types/Format';
import { CardModule } from 'primeng/card';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { InputSwitchChangeEvent, InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import Toggle from 'src/app/classes/toggle';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ExamplesList } from '../examples-list/examples-list';

@Component({
  selector: 'toggle-panel',
  templateUrl: './toggle-panel.html',
  styleUrls: ['./toggle-panel.css'],
  standalone: true,
  imports: [
    CardModule,
    DropdownModule,
    InputSwitchModule,
    SelectButtonModule,
    ButtonModule,
    FormsModule,
    NgFor,
    NgIf,
  ],
})
export class TogglePanel {
  checked: boolean = false;

  constructor(public ui: UserInput) {}

  isToggleable() {
    return this.ui.currTab.toggles.findIndex((x) => x.isButton) == -1;
  }

  keys(obj: any) {
    if (!obj) {
      return [];
    }
    return Object.keys(obj);
  }

  formatSelected(evt: DropdownChangeEvent) {
    this.ui.currFormat = this.ui.currTab.formats.filter(
      (format: Format) => format.name == evt.value.name
    )[0];

    this.ui.formatChanged();
  }

  toggleChanged(evt: InputSwitchChangeEvent, toggle: Toggle) {
    this.ui.variantChanged(toggle.name);
  }

  buttonClicked(event: MouseEvent, operation: Toggle) {
    this.ui.operationClicked(operation.name);
  }
}
