import { Component } from '@angular/core';


interface categoryItem {
  name: string,
  path: string,
  childrenPath: string,
  icon: string
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  public categoryList : categoryItem[] = [
    { name: 'Home', path: 'main', childrenPath: 'welcome', icon: 'fas fa-home category-option'},
    { name: 'About us', path: 'main', childrenPath: 'contact', icon: 'fas fa-info-circle category-option'},
    { name: 'Spinner', path: '', childrenPath: 'asd', icon: 'fas fa-spinner fa-spin'},
  ]

  public toggle : boolean = false;

  public toggleCategoryList() {
    this.toggle = !this.toggle;
  }

}
