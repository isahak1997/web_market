import {Component} from '@angular/core';

@Component({
  selector: 'app-random-img',
  templateUrl: './random-img.component.html',
  styleUrls: ['./random-img.component.css']
})
export class RandomImgComponent {

  arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    .map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  public showDescription = true;

  constructor() {
  }
}
