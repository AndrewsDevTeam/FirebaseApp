import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/user/user.services';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user/user.model';


@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  userList$: Observable<User[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userservice: UserService) {
    this.userList$ = this.userservice
      .getUserList()
      .snapshotChanges()
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }));
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

}
