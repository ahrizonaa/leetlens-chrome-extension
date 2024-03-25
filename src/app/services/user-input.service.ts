import { Tab } from './../types/Tab';
import { Injectable, Injector } from '@angular/core';
import { Tabs } from '../constants/Tabs';
import { Format } from '../types/Format';
import { ValidatorService } from './validator.service';
import { Graph } from '../classes/graph';
import { Tree } from '../classes/tree';
import { Stack } from '../classes/stack';
import { Queue } from '../classes/queue';
import { LinkedList } from '../classes/linkedlist';
import { Example } from '../types/Example';

@Injectable({
  providedIn: 'root',
})
export class UserInput {
  public tabs = Tabs;
  public currTab: Tab = this.tabs[0];
  public currFormat: Format = this.currTab.formats[0];
  public currInput: string = '';
  public refreshDisabled: boolean = false;
  public currError: string = '';
  public currDS!: Graph | Tree | Stack | Queue | LinkedList;
  public hasDrawing: boolean = false;
  public injector: Injector;

  constructor(public validator: ValidatorService, injector: Injector) {
    this.injector = injector;
    this.tabChanged();
  }

  parse(str: string) {
    return JSON.parse(str, function (k, v) {
      return typeof v === 'object' || isNaN(v) ? v : parseInt(v, 10);
    });
  }

  tabChanged() {
    if (this.currDS) {
      this.currDS.ClearCanvas();
    }
    switch (this.currTab.title) {
      case 'Graph':
        this.currDS = new Graph(this);
        break;
      case 'Tree':
        this.currDS = new Tree(this);
        break;
      case 'Stack':
        this.currDS = new Stack(this);
        break;
      case 'Queue':
        this.currDS = new Queue(this);
        break;
      case 'LinkedList':
        this.currDS = new LinkedList(this);
        break;
    }
    if (this.validate()) {
      this.draw();
    }
  }

  draw() {
    let input = this.parse(this.currInput);
    if (input) {
      this.hasDrawing = true;
      this.currDS.Parse(input);
      this.currDS.Plot();
    }
  }

  formatChanged() {
    this.refresh();
  }

  variantChanged(togglename: string) {
    this.currDS.VariantChanged(togglename);
    this.refresh();
  }

  operationClicked(operation: string) {
    if (operation == 'Push') {
      (this.currDS as Stack).Push();
    } else if (operation == 'Pop') {
      (this.currDS as Stack).Pop();
    } else if (operation == 'Enqueue') {
      (this.currDS as Queue).Enqueue();
    } else if (operation == 'Dequeue') {
      (this.currDS as Queue).Dequeue();
    }
  }

  exampleClicked(example: Example) {
    this.currInput = JSON.stringify(example.dataset);

    for (let toggle of example.toggles) {
      if (!toggle.isButton) {
        let idx = this.currTab.toggles.findIndex((x) => x.name == toggle.name);

        this.currTab.toggles[idx].value = toggle.value;
      }
    }
    this.currFormat = example.format;

    this.refresh();
  }

  refresh() {
    if (this.validate()) {
      this.currError = '';
      this.tabChanged();
    } else {
    }
  }

  validate(): boolean {
    let result = this.validator.isValid(this);

    if (result === true) {
      this.currError = '';
      return true;
    } else {
      this.currError = result as string;
      return false;
    }
  }

  Switch(togglename: string, val?: boolean) {
    if (this.currTab) {
      let idx = this.currTab.toggles.findIndex((x) => x.name == togglename);

      if (idx != -1) {
        if (val === undefined) {
          return this.currTab.toggles[idx].value;
        }

        this.currTab.toggles[idx].value = val;
      }
    }
  }
}
