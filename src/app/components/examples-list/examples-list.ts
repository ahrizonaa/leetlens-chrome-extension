import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { UserInput } from 'src/app/services/user-input.service';
import { Example } from 'src/app/types/Example';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'examples-list',
  templateUrl: './examples-list.html',
  styleUrls: ['./examples-list.css'],
  standalone: true,
  imports: [CardModule, ButtonModule],
})
export class ExamplesList {
  constructor(protected ui: UserInput) {}

  exampleClicked(example: Example) {
    this.ui.exampleClicked(example);
  }
}
