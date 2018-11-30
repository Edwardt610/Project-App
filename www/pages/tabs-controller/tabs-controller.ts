import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HighlightEventsPage } from '../highlight-events/highlight-events';
import { SearchByDepartmentPage } from '../search-by-department/search-by-department';
import { SearchByVenuePage } from '../search-by-venue/search-by-venue';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HighlightEventsPage;
  tab2Root: any = SearchByDepartmentPage;
  tab3Root: any = SearchByVenuePage;
  tab4Root: any = LoginPage;
  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
}
