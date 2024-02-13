import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  constructor(private route:Router) { }
  f1(){
    this.route.navigateByUrl('/tabs/tab1')
  }
  ngOnInit() {
  }

}
