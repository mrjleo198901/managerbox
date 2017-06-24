import { Component, OnInit, Pipe } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  showDialog = false;
  date: DateModel;
  options: DatePickerOptions;
  change($event) {
    //alert($event)
  }

  cardNumber: String;
  validCard: String;
  baseColor: String;
  cedula: String;
  nombre: String;
  apellido: String;
  telefono: String;
  email: String;
  fechaNacimiento: Date;
  sexo: String;
  constructor() {
    this.options = new DatePickerOptions();
    this.cardNumber = "";
    this.validCard = "ñ1006771_";
    //Default component color rgb(248, 245, 240)
    this.baseColor = "#f8f5f0";
  }

  ngOnInit() {
    document.getElementById('numero').focus();
  }

  onChange() {

    let finalChar = this.cardNumber.slice(-1)
    if (finalChar.localeCompare("_") == 0) {
      let v = document.getElementById('numero');
      v.click();
      //console.log(this.cardNumber);
      if (this.cardNumber === this.validCard) {
        document.getElementById('basic-addon1').style.backgroundColor = '#088A08';//dark green
        document.getElementById('basic-addon2').style.backgroundColor = '#f8f5f0';//default color
      } else {
        var x = document.getElementById('basic-addon2')
        document.getElementById('basic-addon2').style.backgroundColor = '#FE2E2E';//soft red
        document.getElementById('basic-addon1').style.backgroundColor = '#f8f5f0';//default color

      }
    }
  }
}

