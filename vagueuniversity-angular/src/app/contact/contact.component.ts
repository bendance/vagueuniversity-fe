import { Component, OnInit } from '@angular/core';
import { MailbotService } from '../mailbot.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  emailForm = 
  {
    name: "",
    email: "",
    message: ""
  }

  constructor(private mailbotService: MailbotService) { }

  ngOnInit(): void {
  }

  // when one of the values of the form is changed, update the emailForm object
  onChange(event: any)
  {
    switch(event.target.id)
    {
      case "name":
        this.emailForm.name = event.target.value; break;
      case "email":
        this.emailForm.email = event.target.value; break;
      case "Message":
        this.emailForm.message = event.target.value; break;
      default:
        "invalid id type";
    }
  }

  // submit message
  submitMessage(event: any)
  {
    event.preventDefault();
    this.mailbotService.sendMail(this.emailForm.name, this.emailForm.email, this.emailForm.message);
  }
}
