import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Injector, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';

import { App } from './app';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CanvasView } from './components/canvas-view/canvas-view';
import { JsonInput } from './components/json-input/json-input';
import { ExamplesList } from './components/examples-list/examples-list';
import { TogglePanel } from './components/toggle-panel/toggle-panel';
import { TabView } from './components/tab-view/tab-view';
import { ContentView } from './components/content-view/content-view';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxColorsModule } from 'ngx-colors';
import { CanvasBackground } from './components/canvas-background/canvas-background';

@NgModule({
  declarations: [
    App,
    CanvasView,
    JsonInput,
    ExamplesList,
    TogglePanel,
    TabView,
    ContentView,
    CanvasBackground,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatTooltipModule,
    NgxColorsModule,
  ],
  providers: [],
  bootstrap: [App],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
  static injector: Injector;
  constructor(injector: Injector) {
    AppModule.injector = injector;
  }
}
