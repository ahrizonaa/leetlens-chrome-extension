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
  ],
})
export class ContentView {
  Tabs: Tab[] = Tabs;
  selectedTab: string;
  constructor(public ui: UserInput) {
    this.selectedTab = this.ui.currTab.title;
  }

  tabSelected(evt: SelectButtonOptionClickEvent) {
    this.ui.currTab = Tabs.filter(
      (tab: Tab) => tab.title == evt.option.title
    )[0];
    this.ui.currFormat = this.ui.currTab.formats[0];
    this.ui.currInput = '';
    this.ui.tabChanged();
    this.selectedTab = this.ui.currTab.title;
  }
}
