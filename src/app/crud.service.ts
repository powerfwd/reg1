import { Injectable } from '@angular/core';
 
import { AngularFirestore } from '@angular/fire/firestore';
 
@Injectable({
  providedIn: 'root'
})
export class CrudService {
 
  constructor(
    private firestore: AngularFirestore
  ) { }
 
 
  create_NewStudent(record) {
    return this.firestore.collection('customer').add(record);
  }
  
  read_Students() {
    return this.firestore.collection('customer').snapshotChanges();
  }
 
  update_Student(recordID,record){
    this.firestore.doc('customer/' + recordID).update(record);
  }
 
  delete_Student(record_id) {
    this.firestore.doc('customer/' + record_id).delete();
  }
}