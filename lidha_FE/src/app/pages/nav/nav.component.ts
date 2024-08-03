import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(private router: Router){
    console.log("CAME TO NAV")
  } 
  navigateTo(path: any) {
    this.router.navigateByUrl(path);
  } 
}
