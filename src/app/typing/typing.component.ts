import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss']
})
export class TypingComponent implements OnInit {

  randomText = lorem.sentence();
  enteredText = '';

  onInput(value: string) {
    this.enteredText = value;
  }

  compare(entered: string, random: string) {
    if (!entered) {
      return 'pending';
    }
    return entered === random ? 'correct' : 'incorrect';
  }

  ngOnInit() {
  }

}
