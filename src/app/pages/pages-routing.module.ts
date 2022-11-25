import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { SearchGuard } from 'src/app/guards/search.guard';
import { HomeResolver } from '../resolvers/home.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    title: 'Trending Movies',
    resolve: {
      movies: HomeResolver
    }
  },
  {
    path: 'search',
    pathMatch: 'full',
    component: SearchComponent,
    title: 'Search Movies',
    canActivate: [SearchGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Log In'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
