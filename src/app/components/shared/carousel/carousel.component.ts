import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  slides = [
    { img: '/assets/images/item.png' },
    { img: '/assets/images/item.png' },
    { img: '/assets/images/item.png' },
    { img: '/assets/images/item.png' },
    { img: '/assets/images/item.png' },
    { img: '/assets/images/item.png' },
  ];
  // customOptions: OwlOptions = {
  //   stagePadding: 50,
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   margin: 10,
  //   lazyLoad: false,
  //   pullDrag: false,
  //   dots: false,
  //   rtl: true,
  //   autoplay: false,
  //   navSpeed: 700,
  //   navText: [
  //     '<i class="fa-solid fa-arrow-right"></i>',
  //     '<i class="fa-solid fa-arrow-left"></i>',
  //   ],
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     400: {
  //       items: 2,
  //     },
  //     767: {
  //       items: 2,
  //     },
  //     992: {
  //       items: 3,
  //     },
  //     1280: {
  //       items: 3,
  //     },
  //     1500: {
  //       items: 4,
  //     },
  //   },
  //   nav: true,
  // };

  customOptions: OwlOptions = {
    items: 4,
    loop: false,
    margin: 10,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash',
    rtl: true,
    stagePadding: 50,
    dots: false,
    center:false,


    navText: [
      '<i class="fa-solid fa-arrow-right"></i>',
      '<i class="fa-solid fa-arrow-left"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      767: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1280: {
        items: 2,
      },
      1500: {
        items: 2,
      },
    },
    nav: true,
  };
}
