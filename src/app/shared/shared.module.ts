import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';



@NgModule({
  declarations: [
    SideMenuComponent,
    NavigationBarComponent,
    SearchBarComponent
  ],
  exports: [
    SideMenuComponent,
    NavigationBarComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
