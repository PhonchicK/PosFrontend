import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientService } from './services/common/http-client.service';
import { title } from 'process';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private httpService: HttpClientService)
  {   
  }

  async start() {
    this.httpService.post<LoginData>({ controller: 'auth', action: 'login'}, 
      { email: 'mehmetcankz78@gmail.com', password: '123456' }
    ).subscribe(val => console.log(val) );
  }
}

class LoginData {
  email?: string;
  password?: string;
}
