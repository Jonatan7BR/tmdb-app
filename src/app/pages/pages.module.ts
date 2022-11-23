import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [HomeComponent, SearchComponent],
  imports: [CommonModule, PagesRoutingModule, FormsModule, ComponentsModule]
})
export class PagesModule {}
