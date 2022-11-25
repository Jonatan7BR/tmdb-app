import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username = '';
  password = '';
  error = false;

  constructor (private router: Router) {}

  logIn (): void {
    if (this.username === 'admin' && this.password === 'admin123') {
      sessionStorage.setItem('loggedIn', '1');
      this.error = false;
      this.router.navigateByUrl('/search');
    } else {
      sessionStorage.removeItem('loggedIn');
      this.error = true;
    }
  }

}
