import {Component} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  public messages = [];

  constructor() {
  }

  public sendMessage(event, message) {
    if (event.key === 'Enter') {
      this.messages.push(message);
    }
  }
}
