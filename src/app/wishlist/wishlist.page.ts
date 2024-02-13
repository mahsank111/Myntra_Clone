import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

  constructor(private route:Router) { }
  f1(){
    this.route.navigateByUrl('/tabs/tab1')
  }
  ngOnInit() {
  }

}
