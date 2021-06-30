import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<boolean> {

  r: any;
  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log('calling USERLIST router 2');
    this.r=this.dataService.getTokenList().pipe(catchError(err=> 
      { 
        console.log(err);
        return of(null);
      }));
      console.log('returned by UserListResolver');
      console.log(this.r);
    return (this.r)
  }
}

@Injectable({
  providedIn: 'root'
})
export class ActiveOrderResolver implements Resolve<boolean> {

  r: any;
  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log('calling USERLIST router 2');
    this.r=this.dataService.getActiveOrders().pipe(catchError(err=> 
      { 
        console.log(err);
        return of(null);
      }));
      console.log('returned by OrderListResolver');
      console.log(this.r);
    return (this.r)
  }
}

@Injectable({
  providedIn: 'root'
})
export class CustomerListResolver implements Resolve<boolean> {

  r: any;
  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log('calling USERLIST router 2');
    this.r=this.dataService.getClientList().pipe(catchError(err=> 
      { 
        console.log(err);
        return of(null);
      }));
      console.log('returned by OrderListResolver');
      console.log(this.r);
    return (this.r)
  }
}

@Injectable({
  providedIn: 'root'
})
export class BackgroundDataResolver implements Resolve<boolean> {

  r: any;
  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log('calling USERLIST router 2');
    this.r=this.dataService.getBackgroundData().pipe(catchError(err=> 
      { 
        console.log(err);
        return of(null);
      }));
      console.log('returned by OrderListResolver');
      console.log(this.r);
    return (this.r)
  }
}

@Injectable({
  providedIn: 'root'
})
export class TokenPairResolver implements Resolve<boolean> {

  r: any;
  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log('calling USERLIST router 2');
    this.r=this.dataService.getTokenPairs().pipe(catchError(err=> 
      { 
        console.log(err);
        return of(null);
      }));
      console.log('returned by OrderListResolver');
      console.log(this.r);
    return (this.r)
  }
}