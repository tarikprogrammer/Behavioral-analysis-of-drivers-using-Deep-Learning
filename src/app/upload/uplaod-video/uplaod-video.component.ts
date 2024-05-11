import { Component, OnInit} from '@angular/core';
import {ServiceService} from "../../servives/service.service";
@Component({
  selector: 'app-uplaod-video',
  templateUrl: './uplaod-video.component.html',
  styleUrls: ['./uplaod-video.component.css']
})
export class UplaodVideoComponent implements OnInit{
  isChoosed:boolean = false;
  isShowed:boolean=true;
  url:any;
  selectedVideo:any;
  predictionSet:any=[];
  isLoader=false
  statusVideo:boolean=false;

  constructor(private services:ServiceService){
  }
  ngOnInit() {
  }

  VideoChange(event:any){
    this.selectedVideo = event.target.files[0];
    console.log(this.selectedVideo)
    if(event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e:any)=>{
        this.url = e.target.result;
        this.isChoosed = true;
      }
    }

  }
  upload(){
    this.isLoader=true
    /*this.isShowed = false;*/
    /*let audio = new Audio();
    audio.src="../../../assets/audio/son.mp3";
    audio.load();
    audio.play();*/

    this.services.sendVideo(this.selectedVideo).subscribe(
      (response) => {
       this.predictionSet = response;
       console.log(this.predictionSet[0])
        this.isLoader=false
        this.isShowed=false
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  NotShow(){
    this.isShowed = true;
    /*let getvideo = document.getElementById('videoUpload') as HTMLVideoElement;
     getvideo.pause();*/
   /* if(this.isShowed){
        getvideo.pause();
        console.log( getvideo?.onpause)

    }*/
  }

  onPlay() {
    this.statusVideo=true;
  }

  onPause() {
    this.statusVideo=false
  }
  connectToSSE() {
    const eventSource = new EventSource('http://localhost:5000/classify');

    eventSource.onmessage = event => {
      const prediction = JSON.parse(event.data);
      this.predictionSet.push(prediction);
      this.isLoader = true;
    };

    eventSource.onerror = error => {
      console.error('EventSource failed:', error);
      eventSource.close();
    };
  }




}
