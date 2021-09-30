import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_modules/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "client";
  users: any;

  constructor(private accountservice:AccountService) {}
  ngOnInit(): void {
    // this.getUsers();
    this.setCurrentUser()
  }
  setCurrentUser(){
    const user:User=JSON.parse(localStorage.getItem("user"));
    this.accountservice.setCurrentUser(user);

  }

  // getUsers() {
  //   this.http.get("https://localhost:5001/api/users").subscribe(
  //     (res) => {
  //       this.users = res;
  //       console.log(res);
  //     },
  //     (err) => {
  //       console.error(err);
  //     }
  //   );
  // }
}
