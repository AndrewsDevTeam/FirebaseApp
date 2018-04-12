import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/user/user.services';
import { ToastService } from '../../services/toast/toast.service';
import { User } from '../../models/user/user.model';


@IonicPage()
@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {
  user: User = {
    username: '',
    firstname: '',
    lastname: '',
    dateadded: undefined,
    dateupdated: undefined
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private userservice: UserService, private toast: ToastService) {
  }

  ionViewDidLoad() {

  }

  addUser(user: User) {
    this.userservice.addUser(user)
      .then(ref => {
        this.toast.show(`${user.username} added!`)
        this.navCtrl.setRoot('UsersPage', {key: ref.key})
      });
  }

}
