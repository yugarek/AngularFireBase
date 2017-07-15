import { Component, OnInit } from '@angular/core';
//FireBase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-registroview',
  templateUrl: './registroview.component.html',
  styleUrls: ['./registroview.component.css']
})
export class RegistroviewComponent {

  items: FirebaseListObservable<any[]>;
  newnom:string = "";
  newape:string = "";
  newtel:string = "";

  constructor(public db: AngularFireDatabase) {

  this.items = db.list('/prueba');

  }
  //añadiendo registro
  addItem(addNom: string, addApe: string, addTel: string) {
    this.items.push({ nom: addNom,
                      ape: addApe,
                      tel: addTel});
      this.newnom = "";
      this.newape = "";
      this.newtel = "";
  }
  //borrar 1 registro
  deleteItem(key: string) {
    this.items.remove(key);
  }
  //borrando todo
  deleteEverything() {
    this.items.remove();
  }
}
