import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {

  shoppingItem = {} as ShoppingItem;
  shoppingItemsRef$ : AngularFireList<ShoppingItem>;

  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private database: AngularFireDatabase) {
      this.shoppingItemsRef$ = this.database.list('shopping-list');
  }

  addShoppingItem() : void {
    console.log(this.shoppingItem);
    this.shoppingItemsRef$.push(
      {
        itemName:  this.shoppingItem.itemName,
        itemNumber: Number(this.shoppingItem.itemNumber)
      });

      this.shoppingItem = {} as ShoppingItem;

      this.navCtrl.pop();
  }

}
