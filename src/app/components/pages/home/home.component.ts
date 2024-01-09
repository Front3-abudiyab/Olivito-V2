import { Component } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { StepsComponent } from './steps/steps/steps.component';
import { CarouselComponent } from '../../shared/carousel/carousel.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, StepsComponent , CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
