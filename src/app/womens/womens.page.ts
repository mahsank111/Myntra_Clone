import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-womens',
  templateUrl: './womens.page.html',
  styleUrls: ['./womens.page.scss'],
})
export class WomensPage implements OnInit {

  constructor(private route:Router) { }
  f1(){
    this.route.navigateByUrl('/tabs/tab1')
  }
  ngOnInit() {
  }

}
