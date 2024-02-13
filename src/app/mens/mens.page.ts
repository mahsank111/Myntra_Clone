import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.page.html',
  styleUrls: ['./mens.page.scss'],
})
export class MensPage implements OnInit {

  constructor(private route:Router) { }
  f1(){
    this.route.navigateByUrl('/tabs/tab1')
  }
  ngOnInit() {
  }

}
