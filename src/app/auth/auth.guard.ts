import { IdentityService } from './identity.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private identityService: IdentityService
    ) { }

    canActivate() {
        if (this.identityService.isLoggedIn()) {
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}
