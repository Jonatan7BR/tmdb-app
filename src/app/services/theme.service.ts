import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = new BehaviorSubject<boolean | null>(null);

  changeTheme(value: boolean): void {
    this.isDarkMode.next(value);
  }

  listenTheme(): Observable<boolean | null> {
    return this.isDarkMode.asObservable();
  }
}
