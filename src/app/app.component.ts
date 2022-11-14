import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
	title = 'tmdb-app';

	ngOnInit(): void {
		let themePreference = localStorage.getItem('darkMode');
		if (themePreference !== null) {
			this.changeTheme(themePreference === '1');
		} else {
			this.changeTheme(
				window.matchMedia('(prefers-color-scheme: dark').matches
			);
		}
	}

	private changeTheme(isDarkMode: boolean): void {
		if (isDarkMode) {
			document.body.classList.remove('lightmode');
			document.body.classList.add('darkmode');
			document.documentElement.style.setProperty('color-scheme', 'dark');
		} else {
			document.body.classList.remove('darkmode');
			document.body.classList.add('lightmode');
			document.documentElement.style.setProperty('color-scheme', 'light');
		}
		localStorage.setItem('darkMode', '1');
	}
}
