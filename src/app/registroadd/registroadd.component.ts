import { Component, OnInit } from '@angular/core';
//FireBase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-registroadd',
  templateUrl: './registroadd.component.html',
  styleUrls: ['./registroadd.component.css']
})
export class RegistroaddComponent {

  items: FirebaseListObservable<any[]>;
  newnom:string = "";
  newape:string = "";
  newtel:string = "";
  myM:any;

  constructor(public db: AngularFireDatabase) {

    this.items = db.list('/prueba');

  }
  //añadiendo registro
  addItem(addNom: string, addApe: string, addTel: string) {
    this.items.push({ nom: addNom,
                      ape: addApe,
                      tel: addTel});
    /*  this.newnom = "";
      this.newape = "";
      this.newtel = ""; */
  }
  //borrar 1 registro
  deleteItem(key: string) {
    this.items.remove(key);
  }
  //borrando todo
  deleteEverything() {
    this.items.remove();
  }
  //modal

}
