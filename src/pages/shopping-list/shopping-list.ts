import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  shoppingListRef$: AngularFireList<ShoppingItem>;
  shoppingList: Observable<ShoppingItem[]>;

  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private database: AngularFireDatabase) {

    this.shoppingListRef$ = this.database.list('shopping-list');

    this.shoppingList = this.shoppingListRef$.valueChanges();
  }


  navigateToAddShoppingPage(): void {
    this.navCtrl.push("AddShoppingPage");
  }

}
