import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { DishesComponent } from './components/pages/dishes/dishes.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { AboutComponent } from './components/pages/about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'dishes', component: DishesComponent, pathMatch: 'full' },
    { path: 'gallery', component: GalleryComponent, pathMatch: 'full' },
    { path: 'about-us', component: AboutComponent, pathMatch: 'full' },
];
