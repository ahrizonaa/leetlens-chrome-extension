import { Component } from '@angular/core';
import { Tabs } from 'src/app/constants/Tabs';
import { UserInput } from 'src/app/services/user-input.service';
import { Tab } from 'src/app/types/Tab';
import {
  SelectButtonOptionClickEvent,
  SelectButtonModule,
} from 'primeng/selectbutton';
import { ContentView } from '../content-view/content-view';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'tab-view',
  templateUrl: './tab-view.html',
  styleUrls: ['./tab-view.css'],
  standalone: true,
  imports: [SelectButtonModule, ContentView, FormsModule],
})
export class TabView {
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
