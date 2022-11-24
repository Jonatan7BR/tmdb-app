import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username = '';
  password = '';
  error = false;

  logIn (): void {
    if (this.username === 'admin' && this.password === 'admin123') {
      sessionStorage.setItem('loggedIn', '1');
      this.error = false;
    } else {
      sessionStorage.removeItem('loggedIn');
      this.error = true;
    }
  }

}
