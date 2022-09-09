import { Component } from '@angular/core';


interface bannerImage {
  path: string,
  title: string,
  description: string,
  active: boolean
}

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss']
})
export class BannerCarouselComponent {

  constructor() {}

  public bannerImageList: bannerImage[] = [
    { path: 'assets/images/banner.jpg', title: 'Banner title 1', description: 'Banner description 1', active: true },
    { path: 'assets/images/banner1.jpg', title: 'Banner title 2', description: 'Banner description 2', active: false },
  ]

}
