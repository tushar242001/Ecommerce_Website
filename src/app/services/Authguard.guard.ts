import { Injectable } from '@angular/core';
import { CanActivate, Router , ActivatedRouteSnapshot, RouterStateSnapshot, GuardResult, MaybeAsync} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
    constructor(private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean
    {
        const token:string =sessionStorage.getItem('authToken') || '';
        if(token!=null && token!='' && token!='undefined' )
        {
            return true;
        }
        this.router.navigate(['/login'] );
        return false;
    
    }
}
      
    