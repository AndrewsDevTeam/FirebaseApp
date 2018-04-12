import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../models/user/user.model';

@Injectable()
export class UserService {
  private userListRef = this.db.list<User>('user');

  constructor(private db: AngularFireDatabase) {}

  
  // Retrieve a List of Users
  getUserList() {
    return this.userListRef;
  }

  // Add User to Database
  addUser(user: User) {
    user.dateadded = this.getISODateString();
    user.dateupdated = this.getISODateString();
    return this.userListRef.push(user);
  }

  // Update User in Database
  editUser(user: User) {
    user.dateupdated = this.getISODateString();
    return this.userListRef.update(user.key, user);
  }

  // Remove User from Database
  removeUser(user: User) {
    return this.userListRef.remove(user.key);
  }

  getISODateString(): string {
    return new Date().toISOString();
  }

  getDateString(): string {
    return new Date().toDateString();
  }
}