import { Component } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { StepsComponent } from './steps/steps/steps.component';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeCategoriesComponent } from './home-categories/home-categories.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, StepsComponent,HomeHeaderComponent, HomeCategoriesComponent,CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
