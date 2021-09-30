import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';


@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor( private accountService: AccountService,private toastrService:ToastrService,private router:Router) {}

  ngOnInit() {}

  register() {
    this.accountService.register(this.model).subscribe((response)=>{
      console.log(response)
      this.toastrService.success("WelCome To PerfectPartner");
      this.router.navigateByUrl('/members')

      this.cancel()
    },error=>console.log(error))
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
}
