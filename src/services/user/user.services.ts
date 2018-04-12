import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../models/user/user.model';

@Injectable()
export class UserService {
  private userListRef = this.db.list<User>('user');

  constructor(private db: AngularFireDatabase) {}

  getUserList() {
    return this.userListRef;
  }

  
}