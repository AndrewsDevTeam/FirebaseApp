import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/user/user.services';
import { ToastService } from '../../services/toast/toast.service';
import { User } from '../../models/user/user.model';


@IonicPage()
@Component({
  selector: 'page-edit-user',
  templateUrl: 'edit-user.html',
})
export class EditUserPage {
  user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userservice: UserService, private toast: ToastService) {
  }

  ionViewWillLoad() {
    this.user = this.navParams.get('user');
  }

  saveUser(user: User){
    this.userservice.editUser(user)
    .then(() => {
       this.toast.show(`${user.username} saved!`)
       this.navCtrl.setRoot('UsersPage');
    });
  }

  removeUser(user: User) {
    this.userservice.removeUser(user)
    .then(() => {
      this.toast.show(`${user.username} deleted!`)
      this.navCtrl.setRoot('UsersPage');
    });
  }

}
