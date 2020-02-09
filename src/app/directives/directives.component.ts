import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  currentPage = 0;
  images = [
    {
      title: 'Over the Surf',
      url: 'https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1782&q=80'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1504321946642-8f661bf96ff0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },    {
      title: 'Near the Water',
      url: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=1352&q=80'
    },    {
      title: 'Ah, the Sand!',
      url: 'https://images.unsplash.com/photo-1487349384428-12b47aca925e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Over the Surf',
      url: 'https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1782&q=80'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1504321946642-8f661bf96ff0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },    {
      title: 'Near the Water',
      url: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=1352&q=80'
    },    {
      title: 'Ah, the Sand!',
      url: 'https://images.unsplash.com/photo-1487349384428-12b47aca925e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },    {
      title: 'Over the Surf',
      url: 'https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1782&q=80'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1504321946642-8f661bf96ff0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },    {
      title: 'Near the Water',
      url: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=1352&q=80'
    },    {
      title: 'Ah, the Sand!',
      url: 'https://images.unsplash.com/photo-1487349384428-12b47aca925e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  checkIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
