import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/user/user.services';
import { User } from '../../models/user/user.model';


@IonicPage()
@Component({
  selector: 'page-edit-user',
  templateUrl: 'edit-user.html',
})
export class EditUserPage {
  user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userservice: UserService) {
  }

  ionViewWillLoad() {
    this.user = this.navParams.get('user');
  }

  saveUser(user: User){
    this.userservice.editUser(user).then(() => {
       this.navCtrl.setRoot('UsersPage');
    });
  }

  removeUser(user: User) {
    this.userservice.removeUser(user).then(() => {
      this.navCtrl.setRoot('UsersPage');
    });
  }

}
