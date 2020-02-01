import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

}
