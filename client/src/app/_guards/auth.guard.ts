import { Injectable } from '@angular/core';
import {AccountService} from "../_services/account.service"
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountService:AccountService,private toastr:ToastrService,private router:Router){

  }

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.accountService.currentUser$.pipe(
      map(user=>{
        if(user){return true}
        this.toastr.error("Not Allowed To do SO")
        this.router.navigateByUrl("/");
      })
    )
  }

}
