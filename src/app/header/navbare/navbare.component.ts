import { Component,HostListener } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbare',
  templateUrl: './navbare.component.html',
  styleUrls: ['./navbare.component.css']
})
export class NavbareComponent {
  isScrolled:boolean = false;
  isShow:boolean=false;
  isShowItems:boolean=false;
  constructor(private router:Router) {
  }
  @HostListener('document:scroll')
  scrollFunction(){
    if(document.body.scrollTop>480 || document.documentElement.scrollTop >480){
           this.isScrolled = true;
    }else{
      this.isScrolled = false
    }

  }

  nav() {
   this.isShow =!this.isShow;
  }

  islisted() {
    this.isShowItems = !this.isShowItems
  }

  toHome() {
    this.router.navigateByUrl('home');
  }
}
