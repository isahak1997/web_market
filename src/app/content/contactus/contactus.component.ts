import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SendFormDataService} from './send-form-data.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  providers: [SendFormDataService]
})
export class ContactusComponent {

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    msg: new FormControl('', Validators.min(16))
  });


  constructor(private sendform: SendFormDataService) {
  }

  public onSubmit() {
    this.sendform.sendData(this.contactForm.value);
  }

  public startChat() {
    window.open(location.origin + '/chat', 'Online chat', 'width=700,height=800,center=true,resizable=false,frame=true,transparent=false');
  }
}
