import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  isValidUser(user: User): Boolean {
    return true;
  }
}