import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TooltipModule} from '@syncfusion/ej2-angular-popups';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TooltipModule, ButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None
})
export class App {
  protected readonly title = signal('my-angular-app');
}
