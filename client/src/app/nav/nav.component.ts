import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any={};
  loggedIn:boolean


  constructor(private accountService:AccountService ) { }

  ngOnInit() {
  }
  login(){
    this.accountService.login(this.model).subscribe((res)=>{
      console.log(`response of login ${res}`)
      this.loggedIn=true;
      console.log(`is logged in ${this.loggedIn}`)
    },(err)=>{
      console.log(err)
    })
  }
  logout(){
    this.loggedIn=false;
  }

}
