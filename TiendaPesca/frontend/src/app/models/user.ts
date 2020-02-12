export class User {
  _id: String;
  name: String;
  subname: String;
  DNI: String;
  direction: String;
  email: String;
  CP: Number;
  role: String;
  telephone: Number;

  constructor(_id='' , name='' , subname='' , DNI='' , direction='' , email='' , CP=0 , role='' , telephone=0){
    this._id=_id;
    this.name=name;
    this.subname=subname;
    this.DNI=DNI;
    this.direction=direction;
    this.email=email;
    this.CP=CP;
    this.role=role;
    this.telephone=telephone;
  }

}
