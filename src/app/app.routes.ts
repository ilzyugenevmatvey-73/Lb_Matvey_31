import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about';
import { CatalogComponent } from './pages/catalog/catalog';
import { HomeComponent } from './pages/home/home';
import { NotFoundComponent } from './pages/not-found/not-found';
import { StudioRoomComponent } from './studio-room/studio-room';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'studio-room/:id', component: StudioRoomComponent },
  { path: '**', component: NotFoundComponent },
];
