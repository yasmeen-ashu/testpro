import { Component } from '@angular/core';
import { MatChipOption } from '@angular/material/chips';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  selectedTags:string=""
constructor(private router:Router){

}
ngOnInit(){

}
openHome(){
  this.router.navigate(['/view'])
}
openSignin(){
  this.router.navigate(['/signin'])
}
openSignup(){
  this.router.navigate(['/signup'])
}
selectionData(event){
  console.log(event);
this.selectedTags=event

  }
}
