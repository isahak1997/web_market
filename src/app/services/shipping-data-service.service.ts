import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShippingDataServiceService {

  constructor(http: HttpClient) {
  }

  public getShippingContent() {
    return '<h2>Border Width\n' +
      '\n' +
      'The border-width property specifies the width of the four borders.\n' +
      '\n' +
      'The width can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined values: thin, medium, or thick.\n' +
      '\n' +
      'The border-width property can have from one to four values (for the top border, right border, bottom border, and the left border).</h2>';
  }
}
