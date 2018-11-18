import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public addsticky() {
    const navbar = document.getElementById('navbar');
    const sticky = navbar.offsetTop;

    console.log('ez');
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky');

    } else {
      navbar.classList.remove('sticky');
    }
  }

}
