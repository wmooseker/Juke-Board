import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router:Router){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    //inject auth service
    return this.auth.user$.pipe(
         take(1),
         map(user => !!user), // <-- map to boolean
         tap(loggedIn => {
           if (!loggedIn) {
             console.log('access denied');
             this.router.navigate(['/login']);//do i need login page/component?
           } else{
             console.log('access granted');
           }
       })
    )
  }
  
}
