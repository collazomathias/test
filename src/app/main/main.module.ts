import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';

import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { BannerCarouselComponent } from './components/banner-carousel/banner-carousel.component';


@NgModule({
  declarations: [
    WelcomePageComponent,
    ContactPageComponent,
    BannerCarouselComponent,
  ],
  exports: [
    WelcomePageComponent,
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
