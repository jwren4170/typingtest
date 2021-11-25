import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';

  onInput(e: string) {
    this.enteredText = e;
  }

  compare(randLetter: string, enteredLetter: string) {
    return !enteredLetter
      ? 'pending'
      : randLetter === enteredLetter
      ? 'green'
      : 'red';
  }
}
