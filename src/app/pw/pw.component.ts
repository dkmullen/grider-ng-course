import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pw',
  templateUrl: './pw.component.html',
  styleUrls: ['./pw.component.scss']
})
export class PwComponent implements OnInit {

  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(val: string) {
    const parsedVal = parseInt(val);
    !isNaN(parsedVal) ? this.length = parsedVal : this.length = 0;
  }

  onChangeCheckbox(val) {
    switch (val) {
      case 'letters':
        this.includeLetters = !this.includeLetters;
        break;
      case 'numbers':
        this.includeNumbers = !this.includeNumbers;
        break;
      default:
        this.includeSymbols = !this.includeSymbols;
    }
  }

  onButtonClick() {
    const numbers = '123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    let validChars = '';

    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    let generatedPassword = '';

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  ngOnInit() {
  }

}
