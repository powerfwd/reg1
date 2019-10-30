import { Component, OnInit } from '@angular/core';
 
import { CrudService } from './../crud.service';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  students: any;
  studentFirstName: string;
  studentLastName: string;
  studentAge: number;
  studentAddress: string;
  studentMobile :number;
  studentGender :string;
  studentEmail :string;
  studentTshirtSizeS :boolean;
  studentTshirtSizeM :boolean;
  studentTshirtSizeL :boolean;
  studentTshirtSizeXL :boolean;
  studentTshirtSizeXXL :boolean;
  studentTshirtNumberS :number;
  studentTshirtNumberM :number;
  studentTshirtNumberL :number;
  studentTshirtNumberXL :number;
  studentTshirtNumberXXL :number;
  studentWalkathon :string;
  
 
  constructor(private crudService: CrudService) { }
 
  ngOnInit() {

    this.crudService.read_Students().subscribe(data => {
 
      this.students = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          FirstName: e.payload.doc.data()['FirstName'],
          LastName : e.payload.doc.data()['LastName'],
          Age: e.payload.doc.data()['Age'],
          Address: e.payload.doc.data()['Address'],
          Mobile: e.payload.doc.data()['Mobile'],
          Gender: e.payload.doc.data()['Gender'],
          Email : e.payload.doc.data()['Email'],
          TshirtS : e.payload.doc.data()['TshirtS'],
          TshirtM : e.payload.doc.data()['TshirtM'],
          TshirtL : e.payload.doc.data()['TshirtL'],
          TshirtXL : e.payload.doc.data()['TshirtXL'],
          TshirtXXL : e.payload.doc.data()['TshirtXXL'],
          TshirtSNumber : e.payload.doc.data()['TshirtSNumber'],
          TshirtMNumber : e.payload.doc.data()['TshirtMNumber'],
          TshirtLNumber : e.payload.doc.data()['TshirtLNumber'],
          TshirtXLNumber : e.payload.doc.data()['TshirtXLNumber'],
          TshirtXXLNumber : e.payload.doc.data()['TshirtXXLNumber'],
          Walkathon : e.payload.doc.data()['Walkathon'],
        };
      })
      console.log(this.students);
 
    });
  }
 
  CreateRecord() {
    let record = {};
    record['FirstName'] = this.studentFirstName;
    record['LastName'] = this.studentLastName;
    record['Age'] = this.studentAge;
    record['Address'] = this.studentAddress;
    record['MobileNumber'] = this.studentMobile;
    record['Gender'] = this.studentGender;
    record['Email'] = this.studentEmail;
    //record['TshirtS'] = this.studentTshirtSizeS;
    //record['TshirtM'] = this.studentTshirtSizeM;
    //record['TshirtL'] = this.studentTshirtSizeL;
    //record['TshirtXL'] = this.studentTshirtSizeXL;
    //record['TshirtXXL'] = this.studentTshirtSizeXXL;
    //record['TshirtSNumber'] = this.studentTshirtNumberS;
    //record['TshirtMNumber'] = this.studentTshirtNumberM;
    //record['TshirtLNumber'] = this.studentTshirtNumberL;
    //record['TshirtXLNumber'] = this.studentTshirtNumberXL;
    //record['TshirtXXLNumber'] = this.studentTshirtNumberXXL;
    //record['Walkathon'] = this.studentWalkathon;
    this.crudService.create_NewStudent(record).then(resp => {
      this.studentFirstName = "";
      this.studentLastName = "";
      this.studentAge = undefined;
      this.studentAddress = "";
      this.studentMobile = undefined;
      this.studentGender = "";
      this.studentEmail = "";
      //this.studentTshirtSizeS = undefined;
      //this.studentTshirtSizeM = undefined;
      //this.studentTshirtSizeL = undefined;
      //this.studentTshirtSizeXL = undefined;
      //this.studentTshirtSizeXXL = undefined;
      //this.studentTshirtNumberS = undefined;
      //this.studentTshirtNumberM = undefined;
      //this.studentTshirtNumberL = undefined;
      //this.studentTshirtNumberXL = undefined;
      //this.studentTshirtNumberXXL = undefined;
      //this.studentWalkathon = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
 
  RemoveRecord(rowID) {
    this.crudService.delete_Student(rowID);
  }
 
  EditRecord(record) {
    record.isEdit = true;
    record.EditFirstName = record.FirstName;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }
 
  UpdateRecord(recordRow) {
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Age'] = recordRow.EditAge;
    record['Address'] = recordRow.EditAddress;
    this.crudService.update_Student(recordRow.id, record);
    recordRow.isEdit = false;
  }
  //onChangeHandler($event) {
  //  this.studentGender = $event.target.value;
  //}
  defaultSelectedRadio = "radio_2";
  //Get value on ionChange on IonRadioGroup
  selectedRadioGroup:any;
  //Get value on ionSelect on IonRadio item
  selectedRadioItem:any;
 
  radio_list = [
    {
      id: '1',
      name: 'radio_list',
      value: 'radio_1',
      text: 'Male',
      disabled: false,
      checked: "studentGender==='Male'",
      color: 'primary'
    }, {
      id: '2',
      name: 'radio_list',
      value: 'radio_2',
      text: 'Female',
      disabled: false,
      checked: "studentGender==='Female'",
      color: 'primary'
    }, {
      id: '3',
      name: 'radio_list',
      value: 'radio_3',
      text: 'Others',
      disabled: false,
      checked: "studentGender==='Other'",
      color: 'primary'
    },
  ];
 
  radioGroupChange(event) {
    console.log("radioGroupChange",event.detail);
    this.studentGender = event.detail;
  }
 
  radioFocus() {
    console.log("radioFocus");
  }
  radioSelect(event) {
    console.log("radioSelect",event.detail);
    this.studentGender = event.detail;
  }
  radioBlur() {
    console.log("radioBlur");
  }
 
}
