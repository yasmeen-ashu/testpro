import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
constructor(
  private router:Router,
  private _route: ActivatedRoute
){}
ngOnInit(){
  // alert('comes ')
  this.routerQueryParamsSub();
}
openSettings(){
  this.router.navigate(['/yoursettings'])
}

  routerQueryParamsSub(): void {
    this._route.queryParams.pipe(takeUntil(this.onDestroy$)).subscribe({
      
      next(res) {
        console.log('Current Position: ', JSON.parse(res['item']));
      },
      error(msg) {
        console.log('Error Getting Location: ', msg);
      }
    });
  }

  onDestroy$: Subject<boolean> = new Subject<boolean>();
  ngOnDestroy(): void {
    this.onDestroy$.next(false);
  }
}
