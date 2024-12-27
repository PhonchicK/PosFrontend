import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientService } from './services/common/http-client.service';
import { title } from 'process';
import {AuthService} from "./services/common/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private authService: AuthService)
  {   
  }

  async start() {
    this.authService.login("mehmetcankz78@gmail.com", "123456");
  }
}