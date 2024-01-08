import { Component } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { StepsComponent } from './steps/steps/steps.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, StepsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
