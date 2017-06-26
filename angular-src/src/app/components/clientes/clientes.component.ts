import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public tabses: Array<any> = [
    { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
    { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true },
    { title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true },
    { title: 'Dynamic Title 4', content: 'Dynamic content 4', customClass: 'customClass' }
  ];

  public alertMe(): void {
    setTimeout(function (): void {
      alert('You\'ve selected the alert tab!');
    });
  };

  public setActiveTab(index: number): void {
    this.tabses[index].active = true;
  };

  public removeTabHandler(/*tab:any*/): void {
    console.log('Remove Tab handler');
  };
}
