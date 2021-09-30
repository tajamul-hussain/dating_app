import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { User } from '../_modules/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any={};
  // loggedIn:boolean
  currentUser$:Observable<User>;


  constructor(private accountService:AccountService ) { }

  ngOnInit() {
    this.currentUser$=this.accountService.currentUser$;
  }
  login(){
    this.accountService.login(this.model).subscribe((res)=>{
      console.log(res)
      console.log(`response of login ${res}`)
      // this.loggedIn=true;
      // console.log(`is logged in ${this.loggedIn}`)
    },(err)=>{
      console.log(err)
    })
  }
  logout(){
    this.accountService.logout();
  }
  // getCurrentUser(){
  //   this.accountService.currentUser$.subscribe((user)=>{
  //     this.loggedIn=!!user;
  //   },(err)=>{
  //     console.log(err)
  //   })
  // }

}
