import { Component } from '@angular/core';
import { UserInput } from 'src/app/services/user-input.service';
import { TogglePanel } from '../toggle-panel/toggle-panel';
import { ExamplesList } from '../examples-list/examples-list';
import { JsonInput } from '../json-input/json-input';
import { CanvasView } from '../canvas-view/canvas-view';
import {
  SelectButtonModule,
  SelectButtonOptionClickEvent,
} from 'primeng/selectbutton';
import { Tabs } from 'src/app/constants/Tabs';
import { Tab } from 'src/app/types/Tab';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

import { ChipModule } from 'primeng/chip';

import { NgZone } from '@angular/core';

@Component({
  selector: 'content-view',
  templateUrl: './content-view.html',
  styleUrls: ['./content-view.css'],
  standalone: true,
  imports: [
    TogglePanel,
    ExamplesList,
    JsonInput,
    CanvasView,
    SelectButtonModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    ChipModule,
  ],
})
export class ContentView {
  Tabs: Tab[] = Tabs;
  selectedTab: string;
  dialogIsOpen: boolean = false;

  constructor(public ui: UserInput, private zone: NgZone) {
    this.selectedTab = this.ui.currTab.title;
    this.ui.dialogStream.subscribe((isOpen) => {
      this.zone.run(() => {
        this.dialogIsOpen = isOpen;
      });
    });
  }

  tabSelected(evt: SelectButtonOptionClickEvent) {
    this.ui.currTab = Tabs.filter(
      (tab: Tab) => tab.title == evt.option.title
    )[0];
    this.ui.currFormat = this.ui.currTab.formats[0];
    if (!this.ui.LeetFill.length) {
      this.ui.currInput = '';
    }
    this.ui.tabChanged();
    this.selectedTab = this.ui.currTab.title;
  }

  chipRemoved(idx: number) {
    this.ui.datasetIndicesToRemove.push(idx);
  }

  endDatasetSelection() {
    this.ui.endDatasetSelection();
  }
}
