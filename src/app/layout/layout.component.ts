import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {
  idMenu: number;
  constructor() {

  }
  ngOnInit() {

  }
  getIdMenu(id) {
    this.idMenu = id;
  }
}
