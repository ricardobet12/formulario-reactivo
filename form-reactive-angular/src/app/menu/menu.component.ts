import { Component, OnInit } from '@angular/core';
import {  MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  display: any;

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Opciones',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Material', icon: 'pi pi-fw pi-chart-line',
            routerLink: ['/menu/material'],
            command: (event) => {
            }
          },
          {
            label: 'Prime ng', icon: 'pi pi-fw pi-chart-line',
            routerLink: ['/menu/primeng'],
            command: (event) => {
            }
          }
        ]
      }
    ];

  }

}
