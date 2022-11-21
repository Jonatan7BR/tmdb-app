import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'tmdb-app';

  themeListener!: Subscription;

  constructor(private theme: ThemeService) {}

  ngOnInit(): void {
    this.themeListener = this.theme.listenTheme().subscribe(isDarkMode => {
      if (isDarkMode !== null) {
        this.changeTheme(isDarkMode);
      }
    });

    let userPrefersDarkMode = false;
    let themePreference = localStorage.getItem('darkMode');
    if (themePreference !== null) {
      userPrefersDarkMode = themePreference === '1';
    } else {
      userPrefersDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
    }
    this.theme.changeTheme(userPrefersDarkMode);
  }

  private changeTheme(isDarkMode: boolean): void {
    if (isDarkMode) {
      document.body.classList.remove('lightmode');
      document.body.classList.add('darkmode');
      document.documentElement.style.setProperty('color-scheme', 'dark');
      localStorage.setItem('darkMode', '1');
    } else {
      document.body.classList.remove('darkmode');
      document.body.classList.add('lightmode');
      document.documentElement.style.setProperty('color-scheme', 'light');
      localStorage.setItem('darkMode', '0');
    }
  }

  ngOnDestroy(): void {
    this.themeListener.unsubscribe();
  }
}
