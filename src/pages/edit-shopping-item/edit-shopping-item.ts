import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {

  shoppingItemRef$: AngularFireObject<ShoppingItem>;
  shoppingItem = {} as ShoppingItem;

  shoppingItemSubscription: Subscription;

  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private database: AngularFireDatabase) {

    let shoppingItemId: string = navParams.get("ShoppingItemId");

    this.shoppingItemRef$ = this.database.object(`shopping-list/${shoppingItemId}`);

    this.shoppingItemSubscription = this.shoppingItemRef$.snapshotChanges()
      .map(action => 
        ({ key: action.payload.key, ...action.payload.val() }) as ShoppingItem)      
      .subscribe((data: ShoppingItem) => {
        this.shoppingItem = data;
        console.log(data);
      });
  }

  editShoppingItem(): void {
    this.shoppingItemRef$.update(this.shoppingItem);
    this.navCtrl.pop();
  }

  ionViewWillLeave() {
    this.shoppingItemSubscription.unsubscribe();
  }

}
