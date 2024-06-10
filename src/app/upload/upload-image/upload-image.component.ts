import { Component } from '@angular/core';
import { ServiceService } from 'src/app/servives/service.service';
@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent {
  constructor(private imageService: ServiceService) { }
  isShowed:boolean=true;
  isMuted:boolean = true;
  selectedFile: File | null = null;
  urlImage:any="";
  isSellected:boolean=false;
  predictionResult: any = null;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
    if(event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e:any)=>{
        this.urlImage = e.target.result;
        this.isSellected= true;
      }
    }

  }

  onUpload() {
    if (!this.selectedFile) {
      console.log('No file selected');
      return;
    }

    this.imageService.sendImage(this.selectedFile).subscribe(
      (response) => {
        this.predictionResult = response;
        console.log('Prediction:', this.predictionResult);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
    this.isShowed=false;
    this.isMuted = !this.isMuted;
    /*let audio = new Audio();
    audio.src="../../../assets/audio/son.mp3";
    audio.load();
    audio.play();*/
  }
  NotShow(){
    this.isShowed=true;
  }
}
