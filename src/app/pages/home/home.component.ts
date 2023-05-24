import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  textReceived: any;

  test() {
    //@ts-ignore
    this.textReceived = (<HTMLInputElement> document.getElementById("inputText")).value
    console.log(typeof this.textReceived)
    console.log(this.textReceived)
  }



  ngOnInit(): void {
  }

}
