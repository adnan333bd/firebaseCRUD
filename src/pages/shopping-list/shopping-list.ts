import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  navigateToAddShoppingPage(): void {
    this.navCtrl.push("AddShoppingPage");
  }

}
