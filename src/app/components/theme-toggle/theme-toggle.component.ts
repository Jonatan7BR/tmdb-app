import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit, OnDestroy {
  isDarkMode!: boolean;
  themeListener!: Subscription;

  constructor(private theme: ThemeService) {}

  ngOnInit(): void {
    this.themeListener = this.theme.listenTheme().subscribe(isDarkMode => {
      if (isDarkMode !== null) {
        this.isDarkMode = isDarkMode;
      }
    });
  }

  toggleTheme(): void {
    this.theme.changeTheme(!this.isDarkMode);
  }

  ngOnDestroy(): void {
    this.themeListener.unsubscribe();
  }
}
