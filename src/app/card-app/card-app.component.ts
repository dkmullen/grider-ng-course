import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-app',
  templateUrl: './card-app.component.html',
  styleUrls: ['./card-app.component.scss']
})
export class CardAppComponent implements OnInit {
  posts = [
    {
      image: 'assets/tree.jpeg',
      title: 'Neat Tree',
      username: 'nature',
      content: 'Saw this awesome tree during my hike today.'
    },
    {
      image: 'assets/mountain.jpeg',
      title: 'Snowy Mountain',
      username: 'mountainlover',
      content: 'Here is an awesome, sweet mountain!'
    },
    {
      image: 'assets/biking.jpeg',
      title: 'Great Bike Ride',
      username: 'biker123',
      content: 'Great ride.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }



}
