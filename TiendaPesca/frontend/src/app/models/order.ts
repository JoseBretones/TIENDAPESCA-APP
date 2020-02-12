import {Product} from './product';
import {User} from './user';

export class Order {
  _id: String;
  productCollection: Product [];
  user: User;

  constructor(user: User = new User(), _id=''){
    this._id = _id;
    this.productCollection = [];
    this.user = user;
  }
}
