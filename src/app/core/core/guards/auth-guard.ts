// // import { Injectable } from "@angular/core";
// // import {
// //   Router,
// //   CanActivate,
// //   ActivatedRouteSnapshot,
// //   RouterStateSnapshot,
// // } from "@angular/router";
// // import Swal from "sweetalert2";

// // import { AuthService } from "../service/auth.service";

// // @Injectable({
// //   providedIn: "root",
// // })
// // export class AuthGuard implements CanActivate {
// //   constructor(private authService: AuthService, private router: Router) {}

// //   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
// //     if (this.authService.currentUserValue) {
// //       const userRole = this.authService.currentUserValue.roleName;
// //       // const IS_MEDICAL = this.authService.currentUserValue.isMedical;

// //       if ((route.data.role && route.data.role.indexOf(userRole) === -1)) {
// //         Swal.fire('Please contact admin!')
// //         // this.router.navigate(["/authentication/signin"]);
// //         return false;
// //       }
// //       return true;
// //     }

// //     this.router.navigate(["/authentication/signin"]);
// //     return false;
// //   } 
// // }import { Injectable } from "@angular/core";
// import { Injectable } from "@angular/core";
// import {
//     Router,
//     CanActivate,
//     ActivatedRouteSnapshot,
//     RouterStateSnapshot,
//   } from "@angular/router";
//   import Swal from "sweetalert2";
  
//   import { AuthService } from "../service/auth.service";
  
//   @Injectable({
//     providedIn: "root",
//   })
//   export class AuthGuard implements CanActivate {
//     constructor(private authService: AuthService, private router: Router) {}
  
//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//       if (this.authService.currentUserValue) {
//         const userRole = this.authService.currentUserValue.roleName;
//         // const IS_MEDICAL = this.authService.currentUserValue.isMedical;
  
//         if ((route.data.role && route.data.role.indexOf(userRole) === -1)) {
//           Swal.fire('Please contact admin!')
//           // this.router.navigate(["/authentication/signin"]);
//           return false;
//         }
//         return true;
//       }
  
//       this.router.navigate(["/authentication/signin"]);
//       return false;
//     }
//   }
  