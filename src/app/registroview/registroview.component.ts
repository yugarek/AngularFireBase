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

  show: boolean = true;
  llave:any;
  try:string = "";

  constructor(public db: AngularFireDatabase) {

  this.items = db.list('/prueba');

  }
  //buscador
  buscador(){
    console.log(this.try);
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
  //actualizar
  updateItem(key: string, addNom: string, addApe: string, addTel: string) {
  this.items.update(key, { nom: addNom,
                    ape: addApe,
                    tel: addTel });
  this.llave = "";
  }
  //activar modo edición
  activarEditor(item){
    this.llave = item.$key;
    this.newnom = item.nom;
    this.newape = item.ape;
    this.newtel = item.tel;
  }
  // Cancelar updateItem
  updateCancel(){
    this.llave = "";
  }
  // add 20
  addTwuenty(){
    this.items.push({ nom: "Juan",
                      ape: "Lopez",
                      tel: "987654325"});
    this.items.push({ nom: "Miguel",
                      ape: "Ferrer",
                      tel: "765432198"});
    this.items.push({ nom: "Antonio",
                      ape: "Solis",
                      tel: "654321987"});
    this.items.push({ nom: "Felipe",
                      ape: "Lorenzo",
                      tel: "123456789"});
    this.items.push({ nom: "Yeni",
                      ape: "Forner",
                      tel: "543219876"});
    this.items.push({ nom: "Vicente",
                      ape: "Torres",
                      tel: "987654325"});
    this.items.push({ nom: "Manuel",
                      ape: "Sancho",
                      tel: "219876543"});
    this.items.push({ nom: "Pablo",
                      ape: "Serrano",
                      tel: "456789123"});
    this.items.push({ nom: "Quique",
                      ape: "Ramirez",
                      tel: "987654325"});
    this.items.push({ nom: "Jose Luis",
                      ape: "Estobal",
                      tel: "219876543"});
    this.items.push({ nom: "Carlos",
                      ape: "Ruiz",
                      tel: "456789123"});
    this.items.push({ nom: "Federico",
                      ape: "Frances",
                      tel: "659874123"});
    this.items.push({ nom: "Juan",
                      ape: "Lorente",
                      tel: "123897456"});
    this.items.push({ nom: "Juan",
                      ape: "Soria",
                      tel: "124578968"});
    this.items.push({ nom: "Esteban",
                      ape: "Reina",
                      tel: "456589712"});
    this.items.push({ nom: "Mariano",
                      ape: "Lason",
                      tel: "789987456"});
    this.items.push({ nom: "Juan",
                      ape: "Perez",
                      tel: "122145547"});
    this.items.push({ nom: "Milena",
                      ape: "Enric",
                      tel: "896325741"});
    this.items.push({ nom: "Antonio",
                      ape: "Sabadell",
                      tel: "258741369"});
    this.items.push({ nom: "John",
                      ape: "Calle",
                      tel: "987456326"});
    this.items.push({ nom: "Toni",
                      ape: "Valencia",
                      tel: "987654325"});
    this.items.push({ nom: "Jaime",
                      ape: "Gutierrez",
                      tel: "654321987"});
  }

}
