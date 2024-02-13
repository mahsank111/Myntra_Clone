import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginid',
  templateUrl: './loginid.page.html',
  styleUrls: ['./loginid.page.scss'],
})
export class LoginidPage implements OnInit {
  constructor(private router: Router) { }
  imgsrc = "https://img.icons8.com/material-outlined/24/hide.png";
  inptype = "password";
  unvalue = '';
  passvalue = '';
  change() {
    if (this.imgsrc == "https://img.icons8.com/material-outlined/24/hide.png") {
      this.imgsrc = "https://img.icons8.com/material-outlined/24/visible--v1.png";
      this.inptype = "text";
    }
    else {
      this.imgsrc = "https://img.icons8.com/material-outlined/24/hide.png";
      this.inptype = "password";
    }

  }
  f1(valuee: any) {
    this.unvalue = valuee;
  }
  f2(valuee2: any) {
    this.passvalue = valuee2;
  }
  submit() {
    if (this.unvalue == '') {
      alert("Please fill the Username")
    }
    else if(this.unvalue.search('@')==-1)
    {
      alert("Please enter the valid email address")
    }
    else if (this.passvalue == '') {
      alert("Please provide the Password")
    }
    else if (this.unvalue != '' && this.passvalue != '') {
      this.router.navigateByUrl('');
    }
  }

  ngOnInit() {
  }

}