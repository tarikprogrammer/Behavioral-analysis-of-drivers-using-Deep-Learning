import { Component } from '@angular/core';

@Component({
  selector: 'app-uplaod-video',
  templateUrl: './uplaod-video.component.html',
  styleUrls: ['./uplaod-video.component.css']
})
export class UplaodVideoComponent {
  isChoosed:boolean = false;
  url:string="";
  VideoChange(event:any){
    console.log(event)
    if(event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e:any)=>{
        this.url = e.target.result;
        this.isChoosed = true;
      }
    }

  }
}
