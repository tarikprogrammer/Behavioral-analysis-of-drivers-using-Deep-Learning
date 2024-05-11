import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Driver-Behavior';
  isLoader:boolean=false;

  ngOnInit(): void {
    setTimeout(()=>{
      this.isLoader=true
    },3000);
  }
}
