import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailbotService {

  constructor(private http: HttpClient) { }

  // method to send mail
  public sendMail(name: string, email: string, message: string): Observable<Object>
  {
    const formData: FormData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    return this.http.post('https://localhost:7196/mail/send', formData);
  }
}
