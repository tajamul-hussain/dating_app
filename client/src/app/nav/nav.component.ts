import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { User } from '../_modules/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any={};
  // loggedIn:boolean
  currentUser$:Observable<User>;


  constructor(private accountService:AccountService ,private router:Router,private toastrService:ToastrService) { }

  ngOnInit() {
    this.currentUser$=this.accountService.currentUser$;
  }
  login(){
    this.accountService.login(this.model).subscribe((res)=>{
      this.toastrService.success("Welcome Back");
      this.router.navigateByUrl('/members')


      // this.loggedIn=true;
      // console.log(`is logged in ${this.loggedIn}`)
    },(err)=>{
      console.log(err)
      this.toastrService.error(err.error)
    })
  }
  logout(){
    this.accountService.logout();
    this.toastrService.info("Good Bye Come Back Soon");
    this.router.navigateByUrl('/');
  }
  // getCurrentUser(){
  //   this.accountService.currentUser$.subscribe((user)=>{
  //     this.loggedIn=!!user;
  //   },(err)=>{
  //     console.log(err)
  //   })
  // }

}
