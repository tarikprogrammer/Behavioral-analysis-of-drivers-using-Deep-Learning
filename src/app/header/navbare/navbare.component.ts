import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-navbare',
  templateUrl: './navbare.component.html',
  styleUrls: ['./navbare.component.css']
})
export class NavbareComponent {
  isScrolled:boolean = false;
  @HostListener('document:scroll')
  scrollFunction(){
    if(document.body.scrollTop>480 || document.documentElement.scrollTop >480){
           this.isScrolled = true;
    }else{
      this.isScrolled = false
    }

  }

}
