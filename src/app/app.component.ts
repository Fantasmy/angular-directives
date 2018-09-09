import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  borderFat = false;
  borderDashed = false;
  language = null;
  red = 255;
  green = 0;
  blue = 0;
}
