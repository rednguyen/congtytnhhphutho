import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dropDownMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  enableDropDownMenu(): void{
    this.dropDownMenu = true;
  }

  diableDropDownMenu(): void{
    this.dropDownMenu = false;
  }
}
