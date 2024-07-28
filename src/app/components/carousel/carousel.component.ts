import { Component } from '@angular/core';
import {CarouselModule, OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-carousel',
  standalone: true,
    imports: [
        CarouselModule,
    ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false
  }

  images = [
    "assets/logos/logo_apo.jpg",
    "assets/logos/logo_cima.jpg",
    "assets/logos/logo_econodata.jpg",
    "assets/logos/logo_elmar.jpg",
    "assets/logos/logo_instituto_federal.jpg",
    "assets/logos/logo_printer.jpg",
    "assets/logos/logo_sao_marcos.jpg",
    "assets/logos/logo_sindicato.jpg",
    "assets/logos/logo_termoeste.jpg",
    "assets/logos/logo_tjmg.jpg",
    "assets/logos/logo_tratenge.jpg",
    "assets/logos/logo_via_engenharia.jpg"
  ]
}
