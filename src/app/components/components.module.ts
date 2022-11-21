import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgFallbackModule } from 'ngx-img-fallback';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    ThemeToggleComponent,
    PaginationComponent
  ],
  imports: [CommonModule, ImgFallbackModule],
  exports: [
    HeaderComponent,
    CardComponent,
    ThemeToggleComponent,
    PaginationComponent
  ]
})
export class ComponentsModule {}
