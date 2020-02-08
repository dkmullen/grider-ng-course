import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  name: string;
  date: string;
  amount: number;
  number: number;
  miles: number;
  car = {
    make: 'Toyota',
    model: 'Corolla',
    year: '2010'
  };

  constructor() { }

  ngOnInit() {
  }

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.date = value;
  }

  onAmountChange(value: string) {
    this.amount = parseFloat(value);
  }

  onNumberChange(value: string) {
    this.number = parseFloat(value);
  }

  onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }
}
