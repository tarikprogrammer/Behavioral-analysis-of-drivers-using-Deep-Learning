import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-open-cam',
  templateUrl: './open-cam.component.html',
  styleUrls: ['./open-cam.component.css']
})
export class OpenCamComponent implements OnInit{
  videoRef:any;
  videoRef_Zoom:any;
  isChoosed:boolean = false;
  isShowed:boolean=true;
  ngOnInit(): void {
    this.videoRef=document.getElementById('video');
    this.videoRef_Zoom =document.getElementById('video_Zoom');
    console.log(this.videoRef);
    console.log(this.videoRef_Zoom)


  }
  openCamera(){
    navigator.mediaDevices.getUserMedia({
      video:{width:400},
      audio:false
      }
    ).then(stream=>{
     this.videoRef.srcObject = stream
      this.videoRef_Zoom.srcObject =stream
      this.isChoosed=true;
    })
  }

  apply_changes() {
    this.isShowed =false;
    this.isChoosed=false;
  }

  NotShow() {
    this.isShowed = true;
    this.isChoosed=true
  }
}
