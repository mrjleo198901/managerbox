import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  settings = {
    actions: false,
    columns: {
      tipo: {
        title: 'Tipo', type: 'html', filter: false, valuePrepareFunction: (value) => { return '<div class="wide">' + value + '</div>'; }
      },
      descripcion: {
        width: '100px',
        title: 'Descripcion', type: 'html', filter: false, valuePrepareFunction: (value) => { return '<div class="wide">' + value + '</div>'; }
      }
    }
  };

  data = [
    {
      tipo: 1,
      descripcion: "tipo1"
    },
    {
      tipo: 2,
      descripcion: "tipo2"
    },
    {
      tipo: 3,
      descripcion: "tipo3"
    }
  ];

  showDialog = false;
  showDialogPrint = false;
  //date: DateModel;
  //options: DatePickerOptions;
  change($event) {
    //alert($event)
  }

  cardNumber: String;
  validCard: String;
  baseColor: String;
  validCedula: String;
  cedula: String;
  nombre: String;
  apellido: String;
  telefono: String;
  email: String;
  fechaNacimiento: Date;
  sexo: String;
  cantHombres: number;
  cantMujeres: number;
  cantSalen: number;
  selectedTab: number;

  constructor(private flashMessage: FlashMessagesService) {
    //this.options = new DatePickerOptions();
    this.cardNumber = "";
    this.validCard = "ñ1006771_";
    //Default component color rgb(248, 245, 240)
    this.baseColor = "#f8f5f0";
    this.validCedula = "0502926819";
    this.selectedTab = 1;
  }

  ngOnInit() {
    document.getElementById('numero').focus();
    document.getElementById('basic-addon1').style.backgroundColor = '#f8f5f0';

    this.cantHombres = 1;
    this.cantMujeres = 1;
    this.cantSalen = 0;
    //document.getElementsByClassName('Tipo')['0'].style.width = '100px'
    //default font-size 14px
    /*var el = document.getElementById('labelNumero');
    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    console.log(style)*/

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
  plusWoman1() {
    if (this.cantMujeres < 100)
      this.cantMujeres++;
  }
  checkClient() {
    console.log("asad")
    if (this.cedula === this.validCedula) {
      document.getElementById('basic-addon3').style.backgroundColor = '#088A08';
    } else {
      document.getElementById('basic-addon3').style.backgroundColor = '#FE2E2E';
    }
  }
  lessWoman() {
    if (this.cantMujeres > 0)
      this.cantMujeres--;
  }
  lessMan() {
    if (this.cantHombres > 0)
      this.cantHombres--;
  }
  plusMan() {
    if (this.cantHombres < 100)
      this.cantHombres++;
  }
  lessTotal() {
    if (this.cantSalen > 0)
      this.cantSalen--;
  }
  plusTotal() {
    if (this.cantSalen < (this.cantHombres + this.cantMujeres))
      this.cantSalen++;
  }
  changeTabOpen() {
    this.selectedTab = 1;
    setTimeout(function () {
      let v = document.getElementById('numero');
      v.click();
    }, 200);

    //console.log(this.selectedTab)
  }
  changeTabClose() {
    this.selectedTab = 2;
    setTimeout(function () {
      let v = document.getElementById('numeroS');
      v.click();
    }, 200);
    //console.log(this.selectedTab)
  }
  doRobot() {
    console.log("robot")
    setTimeout(function () {
      let v = document.getElementById('totalPagar');
      v.click();
    }, 1000);
  }
}

